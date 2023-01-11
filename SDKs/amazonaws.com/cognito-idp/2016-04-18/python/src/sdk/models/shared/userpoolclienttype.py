import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
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
class UserPoolClientType:
    r"""UserPoolClientType
    Contains information about a user pool client.
    """
    
    access_token_validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessTokenValidity') }})
    allowed_o_auth_flows: Optional[list[shared_oauthflowtype_enum.OAuthFlowTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlows') }})
    allowed_o_auth_flows_user_pool_client: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlowsUserPoolClient') }})
    allowed_o_auth_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthScopes') }})
    analytics_configuration: Optional[shared_analyticsconfigurationtype.AnalyticsConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsConfiguration') }})
    callback_ur_ls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackURLs') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    client_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientName') }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRedirectURI') }})
    enable_token_revocation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableTokenRevocation') }})
    explicit_auth_flows: Optional[list[shared_explicitauthflowstype_enum.ExplicitAuthFlowsTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitAuthFlows') }})
    id_token_validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdTokenValidity') }})
    last_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logout_ur_ls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogoutURLs') }})
    prevent_user_existence_errors: Optional[shared_preventuserexistenceerrortypes_enum.PreventUserExistenceErrorTypesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreventUserExistenceErrors') }})
    read_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadAttributes') }})
    refresh_token_validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshTokenValidity') }})
    supported_identity_providers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedIdentityProviders') }})
    token_validity_units: Optional[shared_tokenvalidityunitstype.TokenValidityUnitsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenValidityUnits') }})
    user_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    write_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteAttributes') }})
    
