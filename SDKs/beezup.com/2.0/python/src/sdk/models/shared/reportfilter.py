import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfilterlinks as shared_reportfilterlinks
from ..shared import reportfilterparameters as shared_reportfilterparameters


@dataclass_json
@dataclasses.dataclass
class ReportFilter:
    parameters: shared_reportfilterparameters.ReportFilterParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    report_filter_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterId') }})
    report_filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterName') }})
    links: Optional[shared_reportfilterlinks.ReportFilterLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
