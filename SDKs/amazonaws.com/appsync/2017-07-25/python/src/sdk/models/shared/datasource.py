import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamodbdatasourceconfig as shared_dynamodbdatasourceconfig
from ..shared import elasticsearchdatasourceconfig as shared_elasticsearchdatasourceconfig
from ..shared import httpdatasourceconfig as shared_httpdatasourceconfig
from ..shared import lambdadatasourceconfig as shared_lambdadatasourceconfig
from ..shared import relationaldatabasedatasourceconfig as shared_relationaldatabasedatasourceconfig
from ..shared import datasourcetype_enum as shared_datasourcetype_enum


@dataclass_json
@dataclasses.dataclass
class DataSource:
    r"""DataSource
    Describes a data source.
    """
    
    data_source_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceArn') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dynamodb_config: Optional[shared_dynamodbdatasourceconfig.DynamodbDataSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamodbConfig') }})
    elasticsearch_config: Optional[shared_elasticsearchdatasourceconfig.ElasticsearchDataSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticsearchConfig') }})
    http_config: Optional[shared_httpdatasourceconfig.HTTPDataSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpConfig') }})
    lambda_config: Optional[shared_lambdadatasourceconfig.LambdaDataSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relational_database_config: Optional[shared_relationaldatabasedatasourceconfig.RelationalDatabaseDataSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseConfig') }})
    service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleArn') }})
    type: Optional[shared_datasourcetype_enum.DataSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
