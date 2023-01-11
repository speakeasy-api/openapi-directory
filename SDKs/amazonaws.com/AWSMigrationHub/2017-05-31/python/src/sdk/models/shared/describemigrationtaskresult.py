import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import migrationtask as shared_migrationtask


@dataclass_json
@dataclasses.dataclass
class DescribeMigrationTaskResult:
    migration_task: Optional[shared_migrationtask.MigrationTask] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTask') }})
    
