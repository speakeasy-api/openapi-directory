import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statementdata as shared_statementdata


@dataclass_json
@dataclasses.dataclass
class ListStatementsResponse:
    statements: list[shared_statementdata.StatementData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statements') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
