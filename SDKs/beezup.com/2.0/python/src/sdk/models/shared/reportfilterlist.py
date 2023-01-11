import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfilterslinks as shared_reportfilterslinks
from ..shared import reportfilterheader as shared_reportfilterheader


@dataclass_json
@dataclasses.dataclass
class ReportFilterList:
    links: shared_reportfilterslinks.ReportFiltersLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    report_filters: list[shared_reportfilterheader.ReportFilterHeader] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilters') }})
    
