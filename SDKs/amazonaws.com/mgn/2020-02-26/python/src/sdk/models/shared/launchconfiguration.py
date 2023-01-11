import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchdisposition_enum as shared_launchdisposition_enum
from ..shared import licensing as shared_licensing
from ..shared import targetinstancetyperightsizingmethod_enum as shared_targetinstancetyperightsizingmethod_enum


@dataclass_json
@dataclasses.dataclass
class LaunchConfiguration:
    copy_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyPrivateIp') }})
    copy_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyTags') }})
    ec2_launch_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2LaunchTemplateID') }})
    launch_disposition: Optional[shared_launchdisposition_enum.LaunchDispositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchDisposition') }})
    licensing: Optional[shared_licensing.Licensing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensing') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_server_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    target_instance_type_right_sizing_method: Optional[shared_targetinstancetyperightsizingmethod_enum.TargetInstanceTypeRightSizingMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstanceTypeRightSizingMethod') }})
    
