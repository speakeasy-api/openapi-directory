import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceattribute as shared_resourceattribute
from ..shared import task as shared_task


@dataclass_json
@dataclasses.dataclass
class MigrationTask:
    r"""MigrationTask
    Represents a migration task in a migration tool.
    """
    
    migration_task_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    progress_update_stream: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    resource_attribute_list: Optional[list[shared_resourceattribute.ResourceAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAttributeList') }})
    task: Optional[shared_task.Task] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Task') }})
    update_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
