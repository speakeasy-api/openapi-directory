import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaign as shared_campaign


@dataclass_json
@dataclasses.dataclass
class Campaigns:
    r"""Campaigns
    This type contains a list of campaigns.
    """
    
    campaigns: Optional[list[shared_campaign.Campaign]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    
