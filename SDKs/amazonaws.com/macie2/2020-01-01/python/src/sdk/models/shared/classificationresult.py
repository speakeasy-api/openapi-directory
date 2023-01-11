import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdataidentifiers as shared_customdataidentifiers
from ..shared import sensitivedataitem as shared_sensitivedataitem
from ..shared import classificationresultstatus as shared_classificationresultstatus


@dataclass_json
@dataclasses.dataclass
class ClassificationResult:
    r"""ClassificationResult
    Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
    """
    
    additional_occurrences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalOccurrences') }})
    custom_data_identifiers: Optional[shared_customdataidentifiers.CustomDataIdentifiers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataIdentifiers') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    sensitive_data: Optional[list[shared_sensitivedataitem.SensitiveDataItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveData') }})
    size_classified: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeClassified') }})
    status: Optional[shared_classificationresultstatus.ClassificationResultStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
