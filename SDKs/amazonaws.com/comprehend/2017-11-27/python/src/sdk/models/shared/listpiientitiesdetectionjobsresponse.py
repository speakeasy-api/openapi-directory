import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import piientitiesdetectionjobproperties as shared_piientitiesdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListPiiEntitiesDetectionJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    pii_entities_detection_job_properties_list: Optional[list[shared_piientitiesdetectionjobproperties.PiiEntitiesDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PiiEntitiesDetectionJobPropertiesList') }})
    
