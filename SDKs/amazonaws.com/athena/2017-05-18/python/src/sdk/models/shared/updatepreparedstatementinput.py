import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdatePreparedStatementInput:
    query_statement: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryStatement') }})
    statement_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    work_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
