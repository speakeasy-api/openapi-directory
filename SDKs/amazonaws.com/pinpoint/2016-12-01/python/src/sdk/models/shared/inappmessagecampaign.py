import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessage as shared_inappmessage
from ..shared import inappcampaignschedule as shared_inappcampaignschedule


@dataclass_json
@dataclasses.dataclass
class InAppMessageCampaign:
    r"""InAppMessageCampaign
    Targeted in-app message campaign.
    """
    
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignId') }})
    daily_cap: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyCap') }})
    in_app_message: Optional[shared_inappmessage.InAppMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessage') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    schedule: Optional[shared_inappcampaignschedule.InAppCampaignSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    session_cap: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionCap') }})
    total_cap: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCap') }})
    treatment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentId') }})
    
