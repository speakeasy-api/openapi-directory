import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteReportDefinitionRequest:
    r"""DeleteReportDefinitionRequest
    Deletes the specified report.
    """
    
    report_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportName') }})
    
