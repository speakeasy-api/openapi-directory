import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabase as shared_relationaldatabase


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseResult:
    relational_database: Optional[shared_relationaldatabase.RelationalDatabase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabase') }})
    
