import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importstatus_enum as shared_importstatus_enum


@dataclass_json
@dataclasses.dataclass
class DeleteImportResponse:
    import_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importId') }})
    import_status: Optional[shared_importstatus_enum.ImportStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importStatus') }})
    
