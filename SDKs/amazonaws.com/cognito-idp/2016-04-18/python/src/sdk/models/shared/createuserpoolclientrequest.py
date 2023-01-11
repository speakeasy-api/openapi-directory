import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oauthflowtype_enum as shared_oauthflowtype_enum
from ..shared import analyticsconfigurationtype as shared_analyticsconfigurationtype
from ..shared import explicitauthflowstype_enum as shared_explicitauthflowstype_enum
from ..shared import preventuserexistenceerrortypes_enum as shared_preventuserexistenceerrortypes_enum
from ..shared import tokenvalidityunitstype as shared_tokenvalidityunitstype


@dataclass_json
@dataclasses.dataclass
class CreateUserPoolClientRequest:
    r"""CreateUserPoolClientRequest
    Represents the request to create a user pool client.
    """
    
    client_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientName') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    access_token_validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessTokenValidity') }})
    allowed_o_auth_flows: Optional[list[shared_oauthflowtype_enum.OAuthFlowTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlows') }})
    allowed_o_auth_flows_user_pool_client: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlowsUserPoolClient') }})
    allowed_o_auth_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthScopes') }})
    analytics_configuration: Optional[shared_analyticsconfigurationtype.AnalyticsConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsConfiguration') }})
    callback_ur_ls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackURLs') }})
    default_redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRedirectURI') }})
    enable_token_revocation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableTokenRevocation') }})
    explicit_auth_flows: Optional[list[shared_explicitauthflowstype_enum.ExplicitAuthFlowsTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitAuthFlows') }})
    generate_secret: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerateSecret') }})
    id_token_validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdTokenValidity') }})
    logout_ur_ls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogoutURLs') }})
    prevent_user_existence_errors: Optional[shared_preventuserexistenceerrortypes_enum.PreventUserExistenceErrorTypesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreventUserExistenceErrors') }})
    read_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadAttributes') }})
    refresh_token_validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshTokenValidity') }})
    supported_identity_providers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedIdentityProviders') }})
    token_validity_units: Optional[shared_tokenvalidityunitstype.TokenValidityUnitsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenValidityUnits') }})
    write_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteAttributes') }})
    
