import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitiesresponse as shared_activitiesresponse


@dataclass_json
@dataclasses.dataclass
class GetCampaignActivitiesResponse:
    activities_response: shared_activitiesresponse.ActivitiesResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivitiesResponse') }})
    
