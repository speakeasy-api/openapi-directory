import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import migrationtasksummary as shared_migrationtasksummary


@dataclass_json
@dataclasses.dataclass
class ListMigrationTasksResult:
    migration_task_summary_list: Optional[list[shared_migrationtasksummary.MigrationTaskSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
