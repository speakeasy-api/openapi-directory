import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JobDetails:
    r"""JobDetails
    The number of documents successfully and unsuccessfully processed during a translation job.
    """
    
    documents_with_errors_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentsWithErrorsCount') }})
    input_documents_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDocumentsCount') }})
    translated_documents_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslatedDocumentsCount') }})
    
