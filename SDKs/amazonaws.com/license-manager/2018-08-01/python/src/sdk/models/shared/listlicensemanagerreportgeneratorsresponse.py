import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportgenerator as shared_reportgenerator


@dataclass_json
@dataclasses.dataclass
class ListLicenseManagerReportGeneratorsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    report_generators: Optional[list[shared_reportgenerator.ReportGenerator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportGenerators') }})
    
