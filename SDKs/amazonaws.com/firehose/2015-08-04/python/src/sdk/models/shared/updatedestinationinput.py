import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bufferinghints as shared_bufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import compressionformat_enum as shared_compressionformat_enum
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import elasticsearchdestinationupdate as shared_elasticsearchdestinationupdate
from ..shared import extendeds3destinationupdate as shared_extendeds3destinationupdate
from ..shared import httpendpointdestinationupdate as shared_httpendpointdestinationupdate
from ..shared import redshiftdestinationupdate as shared_redshiftdestinationupdate
from ..shared import splunkdestinationupdate as shared_splunkdestinationupdate


@dataclass_json
@dataclasses.dataclass
class UpdateDestinationInputS3DestinationUpdate:
    r"""UpdateDestinationInputS3DestinationUpdate
    [Deprecated] Describes an update for a destination in Amazon S3.
    """
    
    bucket_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    buffering_hints: Optional[shared_bufferinghints.BufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    compression_format: Optional[shared_compressionformat_enum.CompressionFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    error_output_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDestinationInput:
    current_delivery_stream_version_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentDeliveryStreamVersionId') }})
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    destination_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationId') }})
    elasticsearch_destination_update: Optional[shared_elasticsearchdestinationupdate.ElasticsearchDestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchDestinationUpdate') }})
    extended_s3_destination_update: Optional[shared_extendeds3destinationupdate.ExtendedS3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedS3DestinationUpdate') }})
    http_endpoint_destination_update: Optional[shared_httpendpointdestinationupdate.HTTPEndpointDestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointDestinationUpdate') }})
    redshift_destination_update: Optional[shared_redshiftdestinationupdate.RedshiftDestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDestinationUpdate') }})
    s3_destination_update: Optional[UpdateDestinationInputS3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationUpdate') }})
    splunk_destination_update: Optional[shared_splunkdestinationupdate.SplunkDestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplunkDestinationUpdate') }})
    
