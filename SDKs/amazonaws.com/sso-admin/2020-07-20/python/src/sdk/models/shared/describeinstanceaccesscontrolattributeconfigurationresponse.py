import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceaccesscontrolattributeconfiguration as shared_instanceaccesscontrolattributeconfiguration
from ..shared import instanceaccesscontrolattributeconfigurationstatus_enum as shared_instanceaccesscontrolattributeconfigurationstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeInstanceAccessControlAttributeConfigurationResponse:
    instance_access_control_attribute_configuration: Optional[shared_instanceaccesscontrolattributeconfiguration.InstanceAccessControlAttributeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAccessControlAttributeConfiguration') }})
    status: Optional[shared_instanceaccesscontrolattributeconfigurationstatus_enum.InstanceAccessControlAttributeConfigurationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
