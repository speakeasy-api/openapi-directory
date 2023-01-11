import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportgroup as shared_reportgroup


@dataclass_json
@dataclasses.dataclass
class BatchGetReportGroupsOutput:
    report_groups: Optional[list[shared_reportgroup.ReportGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGroups') }})
    report_groups_not_found: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGroupsNotFound') }})
    
