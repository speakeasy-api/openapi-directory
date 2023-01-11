import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceattribute as shared_resourceattribute


@dataclass_json
@dataclasses.dataclass
class PutResourceAttributesRequest:
    migration_task_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    progress_update_stream: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    resource_attribute_list: list[shared_resourceattribute.ResourceAttribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAttributeList') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
