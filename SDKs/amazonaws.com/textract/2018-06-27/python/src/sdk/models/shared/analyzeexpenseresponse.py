import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentmetadata as shared_documentmetadata
from ..shared import expensedocument as shared_expensedocument


@dataclass_json
@dataclasses.dataclass
class AnalyzeExpenseResponse:
    document_metadata: Optional[shared_documentmetadata.DocumentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentMetadata') }})
    expense_documents: Optional[list[shared_expensedocument.ExpenseDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpenseDocuments') }})
    
