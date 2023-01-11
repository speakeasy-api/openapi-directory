import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagefiletype_enum as shared_imagefiletype_enum
from ..shared import createportalresponse as shared_createportalresponse


@dataclasses.dataclass
class CreatePortalHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePortalRequestBodyAlarms:
    r"""CreatePortalRequestBodyAlarms
    Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html\">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
    """
    
    alarm_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmRoleArn') }})
    notification_lambda_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationLambdaArn') }})
    
class CreatePortalRequestBodyPortalAuthModeEnum(str, Enum):
    IAM = "IAM"
    SSO = "SSO"


@dataclass_json
@dataclasses.dataclass
class CreatePortalRequestBodyPortalLogoImageFile:
    r"""CreatePortalRequestBodyPortalLogoImageFile
    Contains an image file.
    """
    
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    type: Optional[shared_imagefiletype_enum.ImageFileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePortalRequestBody:
    portal_contact_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalContactEmail') }})
    portal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    alarms: Optional[CreatePortalRequestBodyAlarms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarms') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    notification_sender_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSenderEmail') }})
    portal_auth_mode: Optional[CreatePortalRequestBodyPortalAuthModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalAuthMode') }})
    portal_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalDescription') }})
    portal_logo_image_file: Optional[CreatePortalRequestBodyPortalLogoImageFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalLogoImageFile') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreatePortalRequest:
    headers: CreatePortalHeaders = dataclasses.field()
    request: CreatePortalRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePortalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_portal_response: Optional[shared_createportalresponse.CreatePortalResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
