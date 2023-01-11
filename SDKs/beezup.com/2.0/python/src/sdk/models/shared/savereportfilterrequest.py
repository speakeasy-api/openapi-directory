import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfilterparameters as shared_reportfilterparameters


@dataclass_json
@dataclasses.dataclass
class SaveReportFilterRequest:
    parameters: shared_reportfilterparameters.ReportFilterParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    report_filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterName') }})
    
