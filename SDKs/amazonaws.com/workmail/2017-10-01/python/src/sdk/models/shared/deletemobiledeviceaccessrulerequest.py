import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteMobileDeviceAccessRuleRequest:
    mobile_device_access_rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobileDeviceAccessRuleId') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    
