import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetBackendAPIResponseResourceConfigConflictResolution:
    r"""GetBackendAPIResponseResourceConfigConflictResolution
    The conflict resolution strategy for your data stored in the data models.
    """
    
    resolution_strategy: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolutionStrategy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings:
    r"""GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings
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
class GetBackendAPIResponseResourceConfigDefaultAuthType:
    r"""GetBackendAPIResponseResourceConfigDefaultAuthType
    The default authentication type for interacting with the configured data models in your Amplify project.
    """
    
    mode: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    settings: Optional[GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAPIResponseResourceConfig:
    r"""GetBackendAPIResponseResourceConfig
    The resource configuration for this response object.
    """
    
    additional_auth_types: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalAuthTypes') }})
    api_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiName') }})
    conflict_resolution: Optional[GetBackendAPIResponseResourceConfigConflictResolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictResolution') }})
    default_auth_type: Optional[GetBackendAPIResponseResourceConfigDefaultAuthType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAuthType') }})
    service: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    transform_schema: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformSchema') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAPIResponse:
    app_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    backend_environment_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendEnvironmentName') }})
    error: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    resource_config: Optional[GetBackendAPIResponseResourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    resource_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceName') }})
    
