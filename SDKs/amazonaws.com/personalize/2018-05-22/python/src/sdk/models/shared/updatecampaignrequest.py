import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignconfig as shared_campaignconfig


@dataclass_json
@dataclasses.dataclass
class UpdateCampaignRequest:
    campaign_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignArn') }})
    campaign_config: Optional[shared_campaignconfig.CampaignConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignConfig') }})
    min_provisioned_tps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minProvisionedTPS') }})
    solution_version_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    
