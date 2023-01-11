import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classifierevaluationmetrics as shared_classifierevaluationmetrics


@dataclass_json
@dataclasses.dataclass
class ClassifierMetadata:
    r"""ClassifierMetadata
    Provides information about a document classifier.
    """
    
    evaluation_metrics: Optional[shared_classifierevaluationmetrics.ClassifierEvaluationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationMetrics') }})
    number_of_labels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfLabels') }})
    number_of_test_documents: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTestDocuments') }})
    number_of_trained_documents: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrainedDocuments') }})
    
