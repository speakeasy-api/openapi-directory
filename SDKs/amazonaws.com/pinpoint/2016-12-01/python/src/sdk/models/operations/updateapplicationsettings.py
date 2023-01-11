import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignhook as shared_campaignhook
from ..shared import campaignlimits as shared_campaignlimits
from ..shared import quiettime as shared_quiettime
from ..shared import updateapplicationsettingsresponse as shared_updateapplicationsettingsresponse


@dataclasses.dataclass
class UpdateApplicationSettingsPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateApplicationSettingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest:
    r"""UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest
    Specifies the default settings for an application.
    """
    
    campaign_hook: Optional[shared_campaignhook.CampaignHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignHook') }})
    cloud_watch_metrics_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchMetricsEnabled') }})
    event_tagging_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTaggingEnabled') }})
    limits: Optional[shared_campaignlimits.CampaignLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    quiet_time: Optional[shared_quiettime.QuietTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateApplicationSettingsRequestBody:
    write_application_settings_request: UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteApplicationSettingsRequest') }})
    

@dataclasses.dataclass
class UpdateApplicationSettingsRequest:
    headers: UpdateApplicationSettingsHeaders = dataclasses.field()
    path_params: UpdateApplicationSettingsPathParams = dataclasses.field()
    request: UpdateApplicationSettingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateApplicationSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_application_settings_response: Optional[shared_updateapplicationsettingsresponse.UpdateApplicationSettingsResponse] = dataclasses.field(default=None)
    
