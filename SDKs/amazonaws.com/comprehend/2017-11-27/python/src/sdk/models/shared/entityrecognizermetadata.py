import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entityrecognizermetadataentitytypeslistitem as shared_entityrecognizermetadataentitytypeslistitem
from ..shared import entityrecognizerevaluationmetrics as shared_entityrecognizerevaluationmetrics


@dataclass_json
@dataclasses.dataclass
class EntityRecognizerMetadata:
    r"""EntityRecognizerMetadata
    Detailed information about an entity recognizer.
    """
    
    entity_types: Optional[list[shared_entityrecognizermetadataentitytypeslistitem.EntityRecognizerMetadataEntityTypesListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityTypes') }})
    evaluation_metrics: Optional[shared_entityrecognizerevaluationmetrics.EntityRecognizerEvaluationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationMetrics') }})
    number_of_test_documents: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTestDocuments') }})
    number_of_trained_documents: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrainedDocuments') }})
    
