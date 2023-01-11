import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attemptstatus_enum as shared_attemptstatus_enum


@dataclass_json
@dataclasses.dataclass
class AttemptRead:
    created_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: shared_attemptstatus_enum.AttemptStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    bytes_synced: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesSynced') }})
    ended_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt') }})
    records_synced: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsSynced') }})
    
