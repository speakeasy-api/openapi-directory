import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import database as shared_database


@dataclass_json
@dataclasses.dataclass
class GetDatabasesResponse:
    database_list: list[shared_database.Database] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
