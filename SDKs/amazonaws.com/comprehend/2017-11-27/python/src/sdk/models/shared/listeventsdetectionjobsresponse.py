import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsdetectionjobproperties as shared_eventsdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListEventsDetectionJobsResponse:
    events_detection_job_properties_list: Optional[list[shared_eventsdetectionjobproperties.EventsDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventsDetectionJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
