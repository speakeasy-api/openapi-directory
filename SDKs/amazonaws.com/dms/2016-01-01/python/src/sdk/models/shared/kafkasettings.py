import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messageformatvalue_enum as shared_messageformatvalue_enum
from ..shared import kafkasecurityprotocol_enum as shared_kafkasecurityprotocol_enum


@dataclass_json
@dataclasses.dataclass
class KafkaSettings:
    r"""KafkaSettings
    Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
    """
    
    broker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Broker') }})
    include_control_details: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeControlDetails') }})
    include_null_and_empty: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeNullAndEmpty') }})
    include_partition_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludePartitionValue') }})
    include_table_alter_operations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeTableAlterOperations') }})
    include_transaction_details: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeTransactionDetails') }})
    message_format: Optional[shared_messageformatvalue_enum.MessageFormatValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageFormat') }})
    message_max_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageMaxBytes') }})
    no_hex_prefix: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoHexPrefix') }})
    partition_include_schema_table: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIncludeSchemaTable') }})
    sasl_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SaslPassword') }})
    sasl_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SaslUsername') }})
    security_protocol: Optional[shared_kafkasecurityprotocol_enum.KafkaSecurityProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityProtocol') }})
    ssl_ca_certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslCaCertificateArn') }})
    ssl_client_certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslClientCertificateArn') }})
    ssl_client_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslClientKeyArn') }})
    ssl_client_key_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslClientKeyPassword') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Topic') }})
    
