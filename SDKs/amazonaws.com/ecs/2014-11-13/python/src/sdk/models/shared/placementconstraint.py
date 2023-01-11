import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementconstrainttype_enum as shared_placementconstrainttype_enum


@dataclass_json
@dataclasses.dataclass
class PlacementConstraint:
    r"""PlacementConstraint
    <p>An object representing a constraint on task placement. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html\">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note>
    """
    
    expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    type: Optional[shared_placementconstrainttype_enum.PlacementConstraintTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
