import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldloglevel_enum as shared_fieldloglevel_enum
from ..shared import defaultaction_enum as shared_defaultaction_enum
from ..shared import additionalauthenticationprovider as shared_additionalauthenticationprovider
from ..shared import creategraphqlapiresponse as shared_creategraphqlapiresponse


@dataclasses.dataclass
class CreateGraphqlAPIHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateGraphqlAPIRequestBodyAuthenticationTypeEnum(str, Enum):
    API_KEY = "API_KEY"
    AWS_IAM = "AWS_IAM"
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
    OPENID_CONNECT = "OPENID_CONNECT"
    AWS_LAMBDA = "AWS_LAMBDA"


@dataclass_json
@dataclasses.dataclass
class CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig:
    r"""CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig
    A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
    """
    
    authorizer_result_ttl_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerResultTtlInSeconds') }})
    authorizer_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerUri') }})
    identity_validation_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityValidationExpression') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGraphqlAPIRequestBodyLogConfig:
    r"""CreateGraphqlAPIRequestBodyLogConfig
    The CloudWatch Logs configuration.
    """
    
    cloud_watch_logs_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogsRoleArn') }})
    exclude_verbose_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeVerboseContent') }})
    field_log_level: Optional[shared_fieldloglevel_enum.FieldLogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldLogLevel') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGraphqlAPIRequestBodyOpenIDConnectConfig:
    r"""CreateGraphqlAPIRequestBodyOpenIDConnectConfig
    Describes an OpenID Connect configuration.
    """
    
    auth_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authTTL') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    iat_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iatTTL') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGraphqlAPIRequestBodyUserPoolConfig:
    r"""CreateGraphqlAPIRequestBodyUserPoolConfig
    Describes an Amazon Cognito user pool configuration.
    """
    
    app_id_client_regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIdClientRegex') }})
    aws_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    default_action: Optional[shared_defaultaction_enum.DefaultActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAction') }})
    user_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolId') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGraphqlAPIRequestBody:
    authentication_type: CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    additional_authentication_providers: Optional[list[shared_additionalauthenticationprovider.AdditionalAuthenticationProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticationProviders') }})
    lambda_authorizer_config: Optional[CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaAuthorizerConfig') }})
    log_config: Optional[CreateGraphqlAPIRequestBodyLogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfig') }})
    open_id_connect_config: Optional[CreateGraphqlAPIRequestBodyOpenIDConnectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openIDConnectConfig') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_pool_config: Optional[CreateGraphqlAPIRequestBodyUserPoolConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolConfig') }})
    xray_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xrayEnabled') }})
    

@dataclasses.dataclass
class CreateGraphqlAPIRequest:
    headers: CreateGraphqlAPIHeaders = dataclasses.field()
    request: CreateGraphqlAPIRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGraphqlAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_graphql_api_response: Optional[shared_creategraphqlapiresponse.CreateGraphqlAPIResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
