import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaigncriterion as shared_campaigncriterion
from ..shared import fundingstrategy as shared_fundingstrategy


@dataclass_json
@dataclasses.dataclass
class CreateCampaignRequest:
    r"""CreateCampaignRequest
    This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
    """
    
    campaign_criterion: Optional[shared_campaigncriterion.CampaignCriterion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignCriterion') }})
    campaign_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignName') }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    funding_strategy: Optional[shared_fundingstrategy.FundingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStrategy') }})
    marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
