import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabasesnapshot as shared_relationaldatabasesnapshot


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseSnapshotResult:
    relational_database_snapshot: Optional[shared_relationaldatabasesnapshot.RelationalDatabaseSnapshot] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseSnapshot') }})
    
