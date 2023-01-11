import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportdefinition as shared_reportdefinition


@dataclass_json
@dataclasses.dataclass
class ListReportDefinitionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    report_definitions: Optional[list[shared_reportdefinition.ReportDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDefinitions') }})
    
