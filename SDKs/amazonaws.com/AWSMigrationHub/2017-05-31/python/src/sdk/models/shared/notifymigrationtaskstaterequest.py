import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import task as shared_task


@dataclass_json
@dataclasses.dataclass
class NotifyMigrationTaskStateRequest:
    migration_task_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    next_update_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextUpdateSeconds') }})
    progress_update_stream: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    task: shared_task.Task = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Task') }})
    update_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
