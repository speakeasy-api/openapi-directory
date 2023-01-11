import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InboxPlacementTrackingOption:
    r"""InboxPlacementTrackingOption
    An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).
    """
    
    global_: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Global') }})
    tracked_isps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackedIsps') }})
    
