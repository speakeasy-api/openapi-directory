import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementstrategytype_enum as shared_placementstrategytype_enum


@dataclass_json
@dataclasses.dataclass
class PlacementStrategy:
    r"""PlacementStrategy
    The task placement strategy for a task or service. To learn more, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html\">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[shared_placementstrategytype_enum.PlacementStrategyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
