import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportstatus_enum as shared_exportstatus_enum


@dataclass_json
@dataclasses.dataclass
class DeleteExportResponse:
    export_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportId') }})
    export_status: Optional[shared_exportstatus_enum.ExportStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportStatus') }})
    
