import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import incidentrecordsummary as shared_incidentrecordsummary


@dataclass_json
@dataclasses.dataclass
class ListIncidentRecordsOutput:
    incident_record_summaries: list[shared_incidentrecordsummary.IncidentRecordSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
