import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_savereportfilterlink as shared_links_savereportfilterlink
from ..shared import links_getreportfilterslink as shared_links_getreportfilterslink


@dataclass_json
@dataclasses.dataclass
class ReportFiltersLinks:
    save: shared_links_savereportfilterlink.LinksSaveReportFilterLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    self: shared_links_getreportfilterslink.LinksGetReportFiltersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
