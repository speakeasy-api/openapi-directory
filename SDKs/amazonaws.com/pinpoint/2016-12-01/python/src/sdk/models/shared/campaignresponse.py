import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import treatmentresource as shared_treatmentresource
from ..shared import customdeliveryconfiguration as shared_customdeliveryconfiguration
from ..shared import campaignstate as shared_campaignstate
from ..shared import campaignhook as shared_campaignhook
from ..shared import campaignlimits as shared_campaignlimits
from ..shared import messageconfiguration as shared_messageconfiguration
from ..shared import schedule as shared_schedule
from ..shared import templateconfiguration as shared_templateconfiguration


@dataclass_json
@dataclasses.dataclass
class CampaignResponse:
    r"""CampaignResponse
    Provides information about the status, configuration, and other settings for a campaign.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creation_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    last_modified_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    segment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    segment_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentVersion') }})
    additional_treatments: Optional[list[shared_treatmentresource.TreatmentResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalTreatments') }})
    custom_delivery_configuration: Optional[shared_customdeliveryconfiguration.CustomDeliveryConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDeliveryConfiguration') }})
    default_state: Optional[shared_campaignstate.CampaignState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultState') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    holdout_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldoutPercent') }})
    hook: Optional[shared_campaignhook.CampaignHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hook') }})
    is_paused: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaused') }})
    limits: Optional[shared_campaignlimits.CampaignLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    message_configuration: Optional[shared_messageconfiguration.MessageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfiguration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    schedule: Optional[shared_schedule.Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    state: Optional[shared_campaignstate.CampaignState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    template_configuration: Optional[shared_templateconfiguration.TemplateConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateConfiguration') }})
    treatment_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentDescription') }})
    treatment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentName') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
