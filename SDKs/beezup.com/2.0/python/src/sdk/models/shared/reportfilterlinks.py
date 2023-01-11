import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_deletereportfilterlink as shared_links_deletereportfilterlink
from ..shared import links_savereportfilterlink as shared_links_savereportfilterlink
from ..shared import links_getreportfilterlink as shared_links_getreportfilterlink


@dataclass_json
@dataclasses.dataclass
class ReportFilterLinks:
    r"""ReportFilterLinks
    Indicates the actions you can do on this report filter
    """
    
    delete: Optional[shared_links_deletereportfilterlink.LinksDeleteReportFilterLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    save: Optional[shared_links_savereportfilterlink.LinksSaveReportFilterLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    self: Optional[shared_links_getreportfilterlink.LinksGetReportFilterLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
