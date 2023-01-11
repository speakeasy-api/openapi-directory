import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dmstransfersettings as shared_dmstransfersettings
from ..shared import docdbsettings as shared_docdbsettings
from ..shared import dynamodbsettings as shared_dynamodbsettings
from ..shared import elasticsearchsettings as shared_elasticsearchsettings
from ..shared import replicationendpointtypevalue_enum as shared_replicationendpointtypevalue_enum
from ..shared import ibmdb2settings as shared_ibmdb2settings
from ..shared import kafkasettings as shared_kafkasettings
from ..shared import kinesissettings as shared_kinesissettings
from ..shared import microsoftsqlserversettings as shared_microsoftsqlserversettings
from ..shared import mongodbsettings as shared_mongodbsettings
from ..shared import mysqlsettings as shared_mysqlsettings
from ..shared import neptunesettings as shared_neptunesettings
from ..shared import oraclesettings as shared_oraclesettings
from ..shared import postgresqlsettings as shared_postgresqlsettings
from ..shared import redissettings as shared_redissettings
from ..shared import redshiftsettings as shared_redshiftsettings
from ..shared import s3settings as shared_s3settings
from ..shared import dmssslmodevalue_enum as shared_dmssslmodevalue_enum
from ..shared import sybasesettings as shared_sybasesettings
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateEndpointMessage:
    r"""CreateEndpointMessage
    <p/>
    """
    
    endpoint_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointIdentifier') }})
    endpoint_type: shared_replicationendpointtypevalue_enum.ReplicationEndpointTypeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    engine_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineName') }})
    certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    dms_transfer_settings: Optional[shared_dmstransfersettings.DmsTransferSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DmsTransferSettings') }})
    doc_db_settings: Optional[shared_docdbsettings.DocDbSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocDbSettings') }})
    dynamo_db_settings: Optional[shared_dynamodbsettings.DynamoDbSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDbSettings') }})
    elasticsearch_settings: Optional[shared_elasticsearchsettings.ElasticsearchSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchSettings') }})
    external_table_definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalTableDefinition') }})
    extra_connection_attributes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraConnectionAttributes') }})
    ibm_db2_settings: Optional[shared_ibmdb2settings.IbmDb2Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IBMDb2Settings') }})
    kafka_settings: Optional[shared_kafkasettings.KafkaSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KafkaSettings') }})
    kinesis_settings: Optional[shared_kinesissettings.KinesisSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisSettings') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    microsoft_sql_server_settings: Optional[shared_microsoftsqlserversettings.MicrosoftSQLServerSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MicrosoftSQLServerSettings') }})
    mongo_db_settings: Optional[shared_mongodbsettings.MongoDbSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MongoDbSettings') }})
    my_sql_settings: Optional[shared_mysqlsettings.MySQLSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MySQLSettings') }})
    neptune_settings: Optional[shared_neptunesettings.NeptuneSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NeptuneSettings') }})
    oracle_settings: Optional[shared_oraclesettings.OracleSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OracleSettings') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    postgre_sql_settings: Optional[shared_postgresqlsettings.PostgreSQLSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostgreSQLSettings') }})
    redis_settings: Optional[shared_redissettings.RedisSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedisSettings') }})
    redshift_settings: Optional[shared_redshiftsettings.RedshiftSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSettings') }})
    resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    s3_settings: Optional[shared_s3settings.S3Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Settings') }})
    server_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    service_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    ssl_mode: Optional[shared_dmssslmodevalue_enum.DmsSslModeValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslMode') }})
    sybase_settings: Optional[shared_sybasesettings.SybaseSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SybaseSettings') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
