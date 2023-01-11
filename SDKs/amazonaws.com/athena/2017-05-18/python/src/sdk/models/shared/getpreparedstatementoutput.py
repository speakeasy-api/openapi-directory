import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preparedstatement as shared_preparedstatement


@dataclass_json
@dataclasses.dataclass
class GetPreparedStatementOutput:
    prepared_statement: Optional[shared_preparedstatement.PreparedStatement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreparedStatement') }})
    
