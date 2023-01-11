import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valueholder as shared_valueholder


@dataclass_json
@dataclasses.dataclass
class ExecuteStatementRequest:
    r"""ExecuteStatementRequest
    Specifies a request to execute a statement.
    """
    
    statement: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statement') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    parameters: Optional[list[shared_valueholder.ValueHolder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
