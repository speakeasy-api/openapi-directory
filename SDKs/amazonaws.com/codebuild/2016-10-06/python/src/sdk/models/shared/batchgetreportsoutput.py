import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import report as shared_report


@dataclass_json
@dataclasses.dataclass
class BatchGetReportsOutput:
    reports: Optional[list[shared_report.Report]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    reports_not_found: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportsNotFound') }})
    
