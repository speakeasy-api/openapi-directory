"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import bufferinghints as shared_bufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import compressionformat_enum as shared_compressionformat_enum
from ..shared import dataformatconversionconfiguration as shared_dataformatconversionconfiguration
from ..shared import dynamicpartitioningconfiguration as shared_dynamicpartitioningconfiguration
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import s3backupmode_enum as shared_s3backupmode_enum
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ExtendedS3DestinationConfiguration:
    r"""Describes the configuration of a destination in Amazon S3."""
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BucketARN') }})  
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RoleARN') }})  
    buffering_hints: Optional[shared_bufferinghints.BufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BufferingHints'), 'exclude': lambda f: f is None }})  
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CloudWatchLoggingOptions'), 'exclude': lambda f: f is None }})  
    compression_format: Optional[shared_compressionformat_enum.CompressionFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CompressionFormat'), 'exclude': lambda f: f is None }})  
    data_format_conversion_configuration: Optional[shared_dataformatconversionconfiguration.DataFormatConversionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DataFormatConversionConfiguration'), 'exclude': lambda f: f is None }})  
    dynamic_partitioning_configuration: Optional[shared_dynamicpartitioningconfiguration.DynamicPartitioningConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DynamicPartitioningConfiguration'), 'exclude': lambda f: f is None }})  
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EncryptionConfiguration'), 'exclude': lambda f: f is None }})  
    error_output_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ErrorOutputPrefix'), 'exclude': lambda f: f is None }})  
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Prefix'), 'exclude': lambda f: f is None }})  
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessingConfiguration'), 'exclude': lambda f: f is None }})  
    s3_backup_configuration: Optional[shared_s3destinationconfiguration.S3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3BackupConfiguration'), 'exclude': lambda f: f is None }})  
    s3_backup_mode: Optional[shared_s3backupmode_enum.S3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3BackupMode'), 'exclude': lambda f: f is None }})  
    