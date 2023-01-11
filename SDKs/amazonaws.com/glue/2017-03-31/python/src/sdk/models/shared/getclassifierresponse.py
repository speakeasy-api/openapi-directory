import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classifier as shared_classifier


@dataclass_json
@dataclasses.dataclass
class GetClassifierResponse:
    classifier: Optional[shared_classifier.Classifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classifier') }})
    
