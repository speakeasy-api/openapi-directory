import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedcapacitydescription as shared_provisionedcapacitydescription


@dataclass_json
@dataclasses.dataclass
class ListProvisionedCapacityOutput:
    provisioned_capacity_list: Optional[list[shared_provisionedcapacitydescription.ProvisionedCapacityDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedCapacityList') }})
    
