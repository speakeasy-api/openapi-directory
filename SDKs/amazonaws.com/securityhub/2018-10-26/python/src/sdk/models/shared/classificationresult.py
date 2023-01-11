import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdataidentifiersresult as shared_customdataidentifiersresult
from ..shared import sensitivedataresult as shared_sensitivedataresult
from ..shared import classificationstatus as shared_classificationstatus


@dataclass_json
@dataclasses.dataclass
class ClassificationResult:
    r"""ClassificationResult
    Details about the sensitive data that was detected on the resource.
    """
    
    additional_occurrences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalOccurrences') }})
    custom_data_identifiers: Optional[shared_customdataidentifiersresult.CustomDataIdentifiersResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDataIdentifiers') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MimeType') }})
    sensitive_data: Optional[list[shared_sensitivedataresult.SensitiveDataResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SensitiveData') }})
    size_classified: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeClassified') }})
    status: Optional[shared_classificationstatus.ClassificationStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
