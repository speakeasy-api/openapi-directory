import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskdefinitionfield_enum as shared_taskdefinitionfield_enum


@dataclass_json
@dataclasses.dataclass
class DescribeTaskDefinitionRequest:
    task_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    include: Optional[list[shared_taskdefinitionfield_enum.TaskDefinitionFieldEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
