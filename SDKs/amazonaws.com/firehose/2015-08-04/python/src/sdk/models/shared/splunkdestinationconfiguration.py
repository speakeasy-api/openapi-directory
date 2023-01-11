import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import hecendpointtype_enum as shared_hecendpointtype_enum
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import splunkretryoptions as shared_splunkretryoptions
from ..shared import splunks3backupmode_enum as shared_splunks3backupmode_enum
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration


@dataclass_json
@dataclasses.dataclass
class SplunkDestinationConfiguration:
    r"""SplunkDestinationConfiguration
    Describes the configuration of a destination in Splunk.
    """
    
    hec_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECEndpoint') }})
    hec_endpoint_type: shared_hecendpointtype_enum.HecEndpointTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECEndpointType') }})
    hec_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECToken') }})
    s3_configuration: shared_s3destinationconfiguration.S3DestinationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    hec_acknowledgment_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECAcknowledgmentTimeoutInSeconds') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[shared_splunkretryoptions.SplunkRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_mode: Optional[shared_splunks3backupmode_enum.SplunkS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
