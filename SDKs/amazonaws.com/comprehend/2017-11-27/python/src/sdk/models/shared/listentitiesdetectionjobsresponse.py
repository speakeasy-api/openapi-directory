import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitiesdetectionjobproperties as shared_entitiesdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListEntitiesDetectionJobsResponse:
    entities_detection_job_properties_list: Optional[list[shared_entitiesdetectionjobproperties.EntitiesDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitiesDetectionJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
