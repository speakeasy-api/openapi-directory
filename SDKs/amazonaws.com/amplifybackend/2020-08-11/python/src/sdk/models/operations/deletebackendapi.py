import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deletebackendapiresponse as shared_deletebackendapiresponse


@dataclasses.dataclass
class DeleteBackendAPIPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBackendAPIHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteBackendAPIRequestBodyResourceConfigConflictResolution:
    r"""DeleteBackendAPIRequestBodyResourceConfigConflictResolution
    The conflict resolution strategy for your data stored in the data models.
    """
    
    resolution_strategy: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolutionStrategy') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings:
    r"""DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings
    Describes settings for the authentication mode.
    """
    
    cognito_user_pool_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoUserPoolId') }})
    description: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    expiration_time: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationTime') }})
    open_id_auth_ttl: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDAuthTTL') }})
    open_id_client_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDClientId') }})
    open_id_iat_ttl: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDIatTTL') }})
    open_id_issue_url: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDIssueURL') }})
    open_id_provider_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDProviderName') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType:
    r"""DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType
    The default authentication type for interacting with the configured data models in your Amplify project.
    """
    
    mode: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    settings: Optional[DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteBackendAPIRequestBodyResourceConfig:
    r"""DeleteBackendAPIRequestBodyResourceConfig
    The resource config for the data model, configured as a part of the Amplify project.
    """
    
    additional_auth_types: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalAuthTypes') }})
    api_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiName') }})
    conflict_resolution: Optional[DeleteBackendAPIRequestBodyResourceConfigConflictResolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictResolution') }})
    default_auth_type: Optional[DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAuthType') }})
    service: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    transform_schema: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformSchema') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteBackendAPIRequestBody:
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_config: Optional[DeleteBackendAPIRequestBodyResourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfig') }})
    

@dataclasses.dataclass
class DeleteBackendAPIRequest:
    headers: DeleteBackendAPIHeaders = dataclasses.field()
    path_params: DeleteBackendAPIPathParams = dataclasses.field()
    request: DeleteBackendAPIRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteBackendAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    delete_backend_api_response: Optional[shared_deletebackendapiresponse.DeleteBackendAPIResponse] = dataclasses.field(default=None)
    gateway_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
