import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignstatus_enum as shared_campaignstatus_enum


@dataclass_json
@dataclasses.dataclass
class CampaignState:
    r"""CampaignState
    Provides information about the status of a campaign.
    """
    
    campaign_status: Optional[shared_campaignstatus_enum.CampaignStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignStatus') }})
    
