import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upsertaction_enum as shared_upsertaction_enum


@dataclass_json
@dataclasses.dataclass
class UpsertRowsResult:
    row_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIds') }})
    upsert_action: Optional[shared_upsertaction_enum.UpsertActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upsertAction') }})
    
