import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preparedstatementsummary as shared_preparedstatementsummary


@dataclass_json
@dataclasses.dataclass
class ListPreparedStatementsOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    prepared_statements: Optional[list[shared_preparedstatementsummary.PreparedStatementSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreparedStatements') }})
    
