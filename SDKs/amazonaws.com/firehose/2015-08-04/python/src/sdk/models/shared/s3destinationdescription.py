import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bufferinghints as shared_bufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import compressionformat_enum as shared_compressionformat_enum
from ..shared import encryptionconfiguration as shared_encryptionconfiguration


@dataclass_json
@dataclasses.dataclass
class S3DestinationDescription:
    r"""S3DestinationDescription
    Describes a destination in Amazon S3.
    """
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    buffering_hints: shared_bufferinghints.BufferingHints = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    compression_format: shared_compressionformat_enum.CompressionFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    encryption_configuration: shared_encryptionconfiguration.EncryptionConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    error_output_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
