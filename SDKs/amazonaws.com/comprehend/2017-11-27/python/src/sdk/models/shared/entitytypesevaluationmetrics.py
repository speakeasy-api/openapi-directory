import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EntityTypesEvaluationMetrics:
    r"""EntityTypesEvaluationMetrics
    Detailed information about the accuracy of an entity recognizer for a specific entity type. 
    """
    
    f1_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1Score') }})
    precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    recall: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    
