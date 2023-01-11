import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exitbehavior_enum as shared_exitbehavior_enum


@dataclass_json
@dataclasses.dataclass
class Tool:
    r"""Tool
    Information about a tool. Tools are used in a simulation job.
    """
    
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    exit_behavior: Optional[shared_exitbehavior_enum.ExitBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitBehavior') }})
    stream_output_to_cloud_watch: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamOutputToCloudWatch') }})
    stream_ui: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamUI') }})
    
