import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import document as shared_document


@dataclass_json
@dataclasses.dataclass
class AnalyzeExpenseRequest:
    document: shared_document.Document = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Document') }})
    
