import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_analyticsindexlink as shared_links_analyticsindexlink
from ..shared import links_gettrackingstatuslink as shared_links_gettrackingstatuslink


@dataclass_json
@dataclasses.dataclass
class AnalyticsIndexLinks:
    self: shared_links_analyticsindexlink.LinksAnalyticsIndexLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    tracking_status: Optional[shared_links_gettrackingstatuslink.LinksGetTrackingStatusLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingStatus') }})
    
