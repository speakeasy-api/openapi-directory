import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importbackendauthresponse as shared_importbackendauthresponse


@dataclasses.dataclass
class ImportBackendAuthPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportBackendAuthHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ImportBackendAuthRequestBody:
    native_client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeClientId') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolId') }})
    web_client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webClientId') }})
    identity_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityPoolId') }})
    

@dataclasses.dataclass
class ImportBackendAuthRequest:
    headers: ImportBackendAuthHeaders = dataclasses.field()
    path_params: ImportBackendAuthPathParams = dataclasses.field()
    request: ImportBackendAuthRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportBackendAuthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    gateway_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    import_backend_auth_response: Optional[shared_importbackendauthresponse.ImportBackendAuthResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
