import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationsummary as shared_operationsummary


@dataclass_json
@dataclasses.dataclass
class ListOperationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    operation_summary_list: Optional[list[shared_operationsummary.OperationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationSummaryList') }})
    
