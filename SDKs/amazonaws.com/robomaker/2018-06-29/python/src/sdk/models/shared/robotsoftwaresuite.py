import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import robotsoftwaresuitetype_enum as shared_robotsoftwaresuitetype_enum
from ..shared import robotsoftwaresuiteversiontype_enum as shared_robotsoftwaresuiteversiontype_enum


@dataclass_json
@dataclasses.dataclass
class RobotSoftwareSuite:
    r"""RobotSoftwareSuite
    Information about a robot software suite (ROS distribution).
    """
    
    name: Optional[shared_robotsoftwaresuitetype_enum.RobotSoftwareSuiteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[shared_robotsoftwaresuiteversiontype_enum.RobotSoftwareSuiteVersionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
