import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startdeviceauthorizationresponse as shared_startdeviceauthorizationresponse


@dataclasses.dataclass
class StartDeviceAuthorizationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class StartDeviceAuthorizationRequestBody:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    start_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUrl') }})
    

@dataclasses.dataclass
class StartDeviceAuthorizationRequest:
    headers: StartDeviceAuthorizationHeaders = dataclasses.field()
    request: StartDeviceAuthorizationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartDeviceAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_client_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    slow_down_exception: Optional[Any] = dataclasses.field(default=None)
    start_device_authorization_response: Optional[shared_startdeviceauthorizationresponse.StartDeviceAuthorizationResponse] = dataclasses.field(default=None)
    unauthorized_client_exception: Optional[Any] = dataclasses.field(default=None)
    
