import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getreportfilterlink as shared_links_getreportfilterlink


@dataclass_json
@dataclasses.dataclass
class ReportFilterHeaderLinks:
    self: shared_links_getreportfilterlink.LinksGetReportFilterLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
