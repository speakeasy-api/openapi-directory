import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deltasyncconfig as shared_deltasyncconfig
from ..shared import authorizationconfig as shared_authorizationconfig
from ..shared import rdshttpendpointconfig as shared_rdshttpendpointconfig
from ..shared import relationaldatabasesourcetype_enum as shared_relationaldatabasesourcetype_enum
from ..shared import createdatasourceresponse as shared_createdatasourceresponse


@dataclasses.dataclass
class CreateDataSourcePathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDataSourceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDataSourceRequestBodyDynamodbConfig:
    r"""CreateDataSourceRequestBodyDynamodbConfig
    Describes an Amazon DynamoDB data source configuration.
    """
    
    aws_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    delta_sync_config: Optional[shared_deltasyncconfig.DeltaSyncConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaSyncConfig') }})
    table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    use_caller_credentials: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCallerCredentials') }})
    versioned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioned') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDataSourceRequestBodyElasticsearchConfig:
    r"""CreateDataSourceRequestBodyElasticsearchConfig
    Describes an Elasticsearch data source configuration.
    """
    
    aws_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDataSourceRequestBodyHTTPConfig:
    r"""CreateDataSourceRequestBodyHTTPConfig
    Describes an HTTP data source configuration.
    """
    
    authorization_config: Optional[shared_authorizationconfig.AuthorizationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDataSourceRequestBodyLambdaConfig:
    r"""CreateDataSourceRequestBodyLambdaConfig
    Describes an Amazon Web Services Lambda data source configuration.
    """
    
    lambda_function_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionArn') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDataSourceRequestBodyRelationalDatabaseConfig:
    r"""CreateDataSourceRequestBodyRelationalDatabaseConfig
    Describes a relational database data source configuration.
    """
    
    rds_http_endpoint_config: Optional[shared_rdshttpendpointconfig.RdsHTTPEndpointConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdsHttpEndpointConfig') }})
    relational_database_source_type: Optional[shared_relationaldatabasesourcetype_enum.RelationalDatabaseSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseSourceType') }})
    
class CreateDataSourceRequestBodyTypeEnum(str, Enum):
    AWS_LAMBDA = "AWS_LAMBDA"
    AMAZON_DYNAMODB = "AMAZON_DYNAMODB"
    AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH"
    NONE = "NONE"
    HTTP = "HTTP"
    RELATIONAL_DATABASE = "RELATIONAL_DATABASE"


@dataclass_json
@dataclasses.dataclass
class CreateDataSourceRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateDataSourceRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dynamodb_config: Optional[CreateDataSourceRequestBodyDynamodbConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamodbConfig') }})
    elasticsearch_config: Optional[CreateDataSourceRequestBodyElasticsearchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticsearchConfig') }})
    http_config: Optional[CreateDataSourceRequestBodyHTTPConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpConfig') }})
    lambda_config: Optional[CreateDataSourceRequestBodyLambdaConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConfig') }})
    relational_database_config: Optional[CreateDataSourceRequestBodyRelationalDatabaseConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseConfig') }})
    service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleArn') }})
    

@dataclasses.dataclass
class CreateDataSourceRequest:
    headers: CreateDataSourceHeaders = dataclasses.field()
    path_params: CreateDataSourcePathParams = dataclasses.field()
    request: CreateDataSourceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDataSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_data_source_response: Optional[shared_createdatasourceresponse.CreateDataSourceResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
