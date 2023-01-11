import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bufferinghints as shared_bufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import compressionformat_enum as shared_compressionformat_enum
from ..shared import dataformatconversionconfiguration as shared_dataformatconversionconfiguration
from ..shared import dynamicpartitioningconfiguration as shared_dynamicpartitioningconfiguration
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration
from ..shared import s3backupmode_enum as shared_s3backupmode_enum


@dataclass_json
@dataclasses.dataclass
class ExtendedS3DestinationConfiguration:
    r"""ExtendedS3DestinationConfiguration
    Describes the configuration of a destination in Amazon S3.
    """
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    buffering_hints: Optional[shared_bufferinghints.BufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    compression_format: Optional[shared_compressionformat_enum.CompressionFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    data_format_conversion_configuration: Optional[shared_dataformatconversionconfiguration.DataFormatConversionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormatConversionConfiguration') }})
    dynamic_partitioning_configuration: Optional[shared_dynamicpartitioningconfiguration.DynamicPartitioningConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamicPartitioningConfiguration') }})
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    error_output_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    s3_backup_configuration: Optional[shared_s3destinationconfiguration.S3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupConfiguration') }})
    s3_backup_mode: Optional[shared_s3backupmode_enum.S3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
