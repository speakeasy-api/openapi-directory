import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsconfig as shared_dnsconfig
from ..shared import healthcheckconfig as shared_healthcheckconfig
from ..shared import healthcheckcustomconfig as shared_healthcheckcustomconfig
from ..shared import tag as shared_tag
from ..shared import servicetypeoption_enum as shared_servicetypeoption_enum


@dataclass_json
@dataclasses.dataclass
class CreateServiceRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    creator_request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dns_config: Optional[shared_dnsconfig.DNSConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsConfig') }})
    health_check_config: Optional[shared_healthcheckconfig.HealthCheckConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfig') }})
    health_check_custom_config: Optional[shared_healthcheckcustomconfig.HealthCheckCustomConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckCustomConfig') }})
    namespace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceId') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    type: Optional[shared_servicetypeoption_enum.ServiceTypeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
