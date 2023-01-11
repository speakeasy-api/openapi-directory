import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeletePreparedStatementInput:
    statement_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    work_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
