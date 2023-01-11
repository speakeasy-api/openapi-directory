import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateTimelineEventOutput:
    event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    incident_record_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordArn') }})
    
