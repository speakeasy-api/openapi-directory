import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActivityResponse:
    r"""ActivityResponse
    Provides information about an activity that was performed by a campaign.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    campaign_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('End') }})
    result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    scheduled_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledStart') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Start') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    successful_endpoint_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulEndpointCount') }})
    timezones_completed_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimezonesCompletedCount') }})
    timezones_total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimezonesTotalCount') }})
    total_endpoint_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalEndpointCount') }})
    treatment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentId') }})
    
