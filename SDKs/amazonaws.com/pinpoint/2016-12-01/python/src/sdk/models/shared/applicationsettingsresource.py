import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignhook as shared_campaignhook
from ..shared import campaignlimits as shared_campaignlimits
from ..shared import quiettime as shared_quiettime


@dataclass_json
@dataclasses.dataclass
class ApplicationSettingsResource:
    r"""ApplicationSettingsResource
    Provides information about an application, including the default settings for an application.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    campaign_hook: Optional[shared_campaignhook.CampaignHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignHook') }})
    last_modified_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    limits: Optional[shared_campaignlimits.CampaignLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    quiet_time: Optional[shared_quiettime.QuietTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    
