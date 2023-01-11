import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateBackendConfigResponseLoginAuthConfig:
    r"""UpdateBackendConfigResponseLoginAuthConfig
    Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
    """
    
    aws_cognito_identity_pool_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCognitoIdentityPoolId') }})
    aws_cognito_region: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCognitoRegion') }})
    aws_user_pools_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsUserPoolsId') }})
    aws_user_pools_web_client_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsUserPoolsWebClientId') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendConfigResponse:
    app_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    backend_manager_app_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendManagerAppId') }})
    error: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    login_auth_config: Optional[UpdateBackendConfigResponseLoginAuthConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginAuthConfig') }})
    
