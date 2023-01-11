import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importfindingserror as shared_importfindingserror


@dataclass_json
@dataclasses.dataclass
class BatchImportFindingsResponse:
    failed_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedCount') }})
    success_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessCount') }})
    failed_findings: Optional[list[shared_importfindingserror.ImportFindingsError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedFindings') }})
    
