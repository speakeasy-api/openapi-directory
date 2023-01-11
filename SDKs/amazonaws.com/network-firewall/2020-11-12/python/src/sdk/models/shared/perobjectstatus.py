import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import perobjectsyncstatus_enum as shared_perobjectsyncstatus_enum


@dataclass_json
@dataclasses.dataclass
class PerObjectStatus:
    sync_status: Optional[shared_perobjectsyncstatus_enum.PerObjectSyncStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncStatus') }})
    update_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    
