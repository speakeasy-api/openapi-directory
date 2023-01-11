import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignresponse as shared_campaignresponse


@dataclass_json
@dataclasses.dataclass
class CampaignsResponse:
    r"""CampaignsResponse
    Provides information about the configuration and other settings for all the campaigns that are associated with an application.
    """
    
    item: list[shared_campaignresponse.CampaignResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
