import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitytypesevaluationmetrics as shared_entitytypesevaluationmetrics


@dataclass_json
@dataclasses.dataclass
class EntityRecognizerMetadataEntityTypesListItem:
    r"""EntityRecognizerMetadataEntityTypesListItem
    Individual item from the list of entity types in the metadata of an entity recognizer.
    """
    
    evaluation_metrics: Optional[shared_entitytypesevaluationmetrics.EntityTypesEvaluationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationMetrics') }})
    number_of_train_mentions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrainMentions') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
