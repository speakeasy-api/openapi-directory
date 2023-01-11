import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignresponse as shared_campaignresponse


@dataclass_json
@dataclasses.dataclass
class CreateCampaignResponse:
    campaign_response: shared_campaignresponse.CampaignResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignResponse') }})
    
