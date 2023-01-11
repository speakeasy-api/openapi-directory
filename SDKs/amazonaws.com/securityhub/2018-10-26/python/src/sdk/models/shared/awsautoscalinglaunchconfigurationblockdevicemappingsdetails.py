import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails as shared_awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails


@dataclass_json
@dataclasses.dataclass
class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails:
    r"""AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
    A block device for the instance.
    """
    
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    ebs: Optional[shared_awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails.AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ebs') }})
    no_device: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoDevice') }})
    virtual_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualName') }})
    
