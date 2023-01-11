import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstboot_enum as shared_firstboot_enum


@dataclass_json
@dataclasses.dataclass
class LaunchedInstance:
    r"""LaunchedInstance
    Configure launced instance.
    """
    
    ec2_instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceID') }})
    first_boot: Optional[shared_firstboot_enum.FirstBootEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBoot') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobID') }})
    
