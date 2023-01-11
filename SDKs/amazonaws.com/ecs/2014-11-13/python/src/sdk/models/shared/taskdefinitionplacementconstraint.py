import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskdefinitionplacementconstrainttype_enum as shared_taskdefinitionplacementconstrainttype_enum


@dataclass_json
@dataclasses.dataclass
class TaskDefinitionPlacementConstraint:
    r"""TaskDefinitionPlacementConstraint
    <p>An object representing a constraint on task placement in the task definition. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html\">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints are not supported for tasks run on Fargate.</p> </note>
    """
    
    expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    type: Optional[shared_taskdefinitionplacementconstrainttype_enum.TaskDefinitionPlacementConstraintTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
