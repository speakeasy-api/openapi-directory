import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagefile as shared_imagefile
from ..shared import updateportalresponse as shared_updateportalresponse


@dataclasses.dataclass
class UpdatePortalPathParams:
    portal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePortalHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePortalRequestBodyAlarms:
    r"""UpdatePortalRequestBodyAlarms
    Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html\">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
    """
    
    alarm_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmRoleArn') }})
    notification_lambda_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationLambdaArn') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePortalRequestBodyPortalLogoImage:
    r"""UpdatePortalRequestBodyPortalLogoImage
    <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
    """
    
    file: Optional[shared_imagefile.ImageFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePortalRequestBody:
    portal_contact_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalContactEmail') }})
    portal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    alarms: Optional[UpdatePortalRequestBodyAlarms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarms') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    notification_sender_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSenderEmail') }})
    portal_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalDescription') }})
    portal_logo_image: Optional[UpdatePortalRequestBodyPortalLogoImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalLogoImage') }})
    

@dataclasses.dataclass
class UpdatePortalRequest:
    headers: UpdatePortalHeaders = dataclasses.field()
    path_params: UpdatePortalPathParams = dataclasses.field()
    request: UpdatePortalRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePortalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_operation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_portal_response: Optional[shared_updateportalresponse.UpdatePortalResponse] = dataclasses.field(default=None)
    
