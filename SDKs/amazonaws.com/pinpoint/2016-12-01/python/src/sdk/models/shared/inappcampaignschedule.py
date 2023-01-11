import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaigneventfilter as shared_campaigneventfilter
from ..shared import quiettime as shared_quiettime


@dataclass_json
@dataclasses.dataclass
class InAppCampaignSchedule:
    r"""InAppCampaignSchedule
    Schedule of the campaign.
    """
    
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    event_filter: Optional[shared_campaigneventfilter.CampaignEventFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    quiet_time: Optional[shared_quiettime.QuietTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    
