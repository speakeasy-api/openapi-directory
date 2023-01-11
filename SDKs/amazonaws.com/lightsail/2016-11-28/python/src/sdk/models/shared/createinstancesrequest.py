import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonrequest as shared_addonrequest
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateInstancesRequest:
    availability_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    blueprint_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprintId') }})
    bundle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    instance_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    add_ons: Optional[list[shared_addonrequest.AddOnRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    custom_image_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customImageName') }})
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    key_pair_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
