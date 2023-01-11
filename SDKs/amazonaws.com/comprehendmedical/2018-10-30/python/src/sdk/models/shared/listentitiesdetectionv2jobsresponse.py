import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comprehendmedicalasyncjobproperties as shared_comprehendmedicalasyncjobproperties


@dataclass_json
@dataclasses.dataclass
class ListEntitiesDetectionV2JobsResponse:
    comprehend_medical_async_job_properties_list: Optional[list[shared_comprehendmedicalasyncjobproperties.ComprehendMedicalAsyncJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComprehendMedicalAsyncJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
