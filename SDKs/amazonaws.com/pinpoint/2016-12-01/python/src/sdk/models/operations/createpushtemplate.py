import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidpushnotificationtemplate as shared_androidpushnotificationtemplate
from ..shared import apnspushnotificationtemplate as shared_apnspushnotificationtemplate
from ..shared import defaultpushnotificationtemplate as shared_defaultpushnotificationtemplate
from ..shared import createpushtemplateresponse as shared_createpushtemplateresponse


@dataclasses.dataclass
class CreatePushTemplatePathParams:
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePushTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePushTemplateRequestBodyPushNotificationTemplateRequest:
    r"""CreatePushTemplateRequestBodyPushNotificationTemplateRequest
    Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
    """
    
    adm: Optional[shared_androidpushnotificationtemplate.AndroidPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADM') }})
    apns: Optional[shared_apnspushnotificationtemplate.ApnsPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNS') }})
    baidu: Optional[shared_androidpushnotificationtemplate.AndroidPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Baidu') }})
    default: Optional[shared_defaultpushnotificationtemplate.DefaultPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Default') }})
    default_substitutions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubstitutions') }})
    gcm: Optional[shared_androidpushnotificationtemplate.AndroidPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCM') }})
    recommender_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommenderId') }})
    template_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePushTemplateRequestBody:
    push_notification_template_request: CreatePushTemplateRequestBodyPushNotificationTemplateRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushNotificationTemplateRequest') }})
    

@dataclasses.dataclass
class CreatePushTemplateRequest:
    headers: CreatePushTemplateHeaders = dataclasses.field()
    path_params: CreatePushTemplatePathParams = dataclasses.field()
    request: CreatePushTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePushTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_push_template_response: Optional[shared_createpushtemplateresponse.CreatePushTemplateResponse] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
