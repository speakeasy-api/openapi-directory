import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bufferinghints as shared_bufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import compressionformat_enum as shared_compressionformat_enum
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import deliverystreamencryptionconfigurationinput as shared_deliverystreamencryptionconfigurationinput
from ..shared import deliverystreamtype_enum as shared_deliverystreamtype_enum
from ..shared import elasticsearchdestinationconfiguration as shared_elasticsearchdestinationconfiguration
from ..shared import extendeds3destinationconfiguration as shared_extendeds3destinationconfiguration
from ..shared import httpendpointdestinationconfiguration as shared_httpendpointdestinationconfiguration
from ..shared import kinesisstreamsourceconfiguration as shared_kinesisstreamsourceconfiguration
from ..shared import redshiftdestinationconfiguration as shared_redshiftdestinationconfiguration
from ..shared import splunkdestinationconfiguration as shared_splunkdestinationconfiguration
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDeliveryStreamInputS3DestinationConfiguration:
    r"""CreateDeliveryStreamInputS3DestinationConfiguration
    [Deprecated] The destination in Amazon S3. You can specify only one destination.
    """
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    buffering_hints: Optional[shared_bufferinghints.BufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    compression_format: Optional[shared_compressionformat_enum.CompressionFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    error_output_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeliveryStreamInput:
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    delivery_stream_encryption_configuration_input: Optional[shared_deliverystreamencryptionconfigurationinput.DeliveryStreamEncryptionConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamEncryptionConfigurationInput') }})
    delivery_stream_type: Optional[shared_deliverystreamtype_enum.DeliveryStreamTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamType') }})
    elasticsearch_destination_configuration: Optional[shared_elasticsearchdestinationconfiguration.ElasticsearchDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchDestinationConfiguration') }})
    extended_s3_destination_configuration: Optional[shared_extendeds3destinationconfiguration.ExtendedS3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedS3DestinationConfiguration') }})
    http_endpoint_destination_configuration: Optional[shared_httpendpointdestinationconfiguration.HTTPEndpointDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointDestinationConfiguration') }})
    kinesis_stream_source_configuration: Optional[shared_kinesisstreamsourceconfiguration.KinesisStreamSourceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamSourceConfiguration') }})
    redshift_destination_configuration: Optional[shared_redshiftdestinationconfiguration.RedshiftDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDestinationConfiguration') }})
    s3_destination_configuration: Optional[CreateDeliveryStreamInputS3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationConfiguration') }})
    splunk_destination_configuration: Optional[shared_splunkdestinationconfiguration.SplunkDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplunkDestinationConfiguration') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
