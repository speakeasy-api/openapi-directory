import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import writetreatmentresource as shared_writetreatmentresource
from ..shared import customdeliveryconfiguration as shared_customdeliveryconfiguration
from ..shared import campaignhook as shared_campaignhook
from ..shared import campaignlimits as shared_campaignlimits
from ..shared import messageconfiguration as shared_messageconfiguration
from ..shared import schedule as shared_schedule
from ..shared import templateconfiguration as shared_templateconfiguration
from ..shared import updatecampaignresponse as shared_updatecampaignresponse


@dataclasses.dataclass
class UpdateCampaignPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCampaignHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCampaignRequestBodyWriteCampaignRequest:
    r"""UpdateCampaignRequestBodyWriteCampaignRequest
    Specifies the configuration and other settings for a campaign.
    """
    
    additional_treatments: Optional[list[shared_writetreatmentresource.WriteTreatmentResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalTreatments') }})
    custom_delivery_configuration: Optional[shared_customdeliveryconfiguration.CustomDeliveryConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDeliveryConfiguration') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    holdout_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldoutPercent') }})
    hook: Optional[shared_campaignhook.CampaignHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hook') }})
    is_paused: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaused') }})
    limits: Optional[shared_campaignlimits.CampaignLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    message_configuration: Optional[shared_messageconfiguration.MessageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfiguration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    schedule: Optional[shared_schedule.Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    segment_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentVersion') }})
    template_configuration: Optional[shared_templateconfiguration.TemplateConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateConfiguration') }})
    treatment_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentDescription') }})
    treatment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentName') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCampaignRequestBody:
    write_campaign_request: UpdateCampaignRequestBodyWriteCampaignRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteCampaignRequest') }})
    

@dataclasses.dataclass
class UpdateCampaignRequest:
    headers: UpdateCampaignHeaders = dataclasses.field()
    path_params: UpdateCampaignPathParams = dataclasses.field()
    request: UpdateCampaignRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_campaign_response: Optional[shared_updatecampaignresponse.UpdateCampaignResponse] = dataclasses.field(default=None)
    
