import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignsummary as shared_campaignsummary


@dataclass_json
@dataclasses.dataclass
class ListCampaignsResponse:
    campaigns: Optional[list[shared_campaignsummary.CampaignSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
