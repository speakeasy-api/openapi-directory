import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverendpointdirection_enum as shared_resolverendpointdirection_enum
from ..shared import ipaddressrequest as shared_ipaddressrequest
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateResolverEndpointRequest:
    creator_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    direction: shared_resolverendpointdirection_enum.ResolverEndpointDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    ip_addresses: list[shared_ipaddressrequest.IPAddressRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddresses') }})
    security_group_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
