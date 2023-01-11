import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportstatus_enum as shared_reportstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetAssessmentReportResponse:
    status: shared_reportstatus_enum.ReportStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
