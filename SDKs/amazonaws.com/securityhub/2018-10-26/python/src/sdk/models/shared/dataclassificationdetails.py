import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationresult as shared_classificationresult


@dataclass_json
@dataclasses.dataclass
class DataClassificationDetails:
    r"""DataClassificationDetails
    Provides details about sensitive data that was detected on a resource.
    """
    
    detailed_results_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailedResultsLocation') }})
    result: Optional[shared_classificationresult.ClassificationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
