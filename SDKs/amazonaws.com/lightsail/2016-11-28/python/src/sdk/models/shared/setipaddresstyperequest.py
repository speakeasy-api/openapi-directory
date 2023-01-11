import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class SetIPAddressTypeRequest:
    ip_address_type: shared_ipaddresstype_enum.IPAddressTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
