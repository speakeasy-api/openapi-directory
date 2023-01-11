import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignsresponse as shared_campaignsresponse


@dataclass_json
@dataclasses.dataclass
class GetCampaignsResponse:
    campaigns_response: shared_campaignsresponse.CampaignsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignsResponse') }})
    
