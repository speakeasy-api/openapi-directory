import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobiledeviceaccessruleeffect_enum as shared_mobiledeviceaccessruleeffect_enum


@dataclass_json
@dataclasses.dataclass
class UpdateMobileDeviceAccessRuleRequest:
    effect: shared_mobiledeviceaccessruleeffect_enum.MobileDeviceAccessRuleEffectEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Effect') }})
    mobile_device_access_rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobileDeviceAccessRuleId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_models: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceModels') }})
    device_operating_systems: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceOperatingSystems') }})
    device_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypes') }})
    device_user_agents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceUserAgents') }})
    not_device_models: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceModels') }})
    not_device_operating_systems: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceOperatingSystems') }})
    not_device_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceTypes') }})
    not_device_user_agents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceUserAgents') }})
    
