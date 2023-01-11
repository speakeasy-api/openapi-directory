import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationsummary as shared_operationsummary


@dataclass_json
@dataclasses.dataclass
class ListOperationsResponse:
    r"""ListOperationsResponse
    The ListOperations response includes the following elements.
    """
    
    operations: list[shared_operationsummary.OperationSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    next_page_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageMarker') }})
    
