import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpendpointbufferinghints as shared_httpendpointbufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import httpendpointconfiguration as shared_httpendpointconfiguration
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import httpendpointrequestconfiguration as shared_httpendpointrequestconfiguration
from ..shared import httpendpointretryoptions as shared_httpendpointretryoptions
from ..shared import httpendpoints3backupmode_enum as shared_httpendpoints3backupmode_enum
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration


@dataclass_json
@dataclasses.dataclass
class HTTPEndpointDestinationConfiguration:
    r"""HTTPEndpointDestinationConfiguration
    Describes the configuration of the HTTP endpoint destination.
    """
    
    endpoint_configuration: shared_httpendpointconfiguration.HTTPEndpointConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfiguration') }})
    s3_configuration: shared_s3destinationconfiguration.S3DestinationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    buffering_hints: Optional[shared_httpendpointbufferinghints.HTTPEndpointBufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    request_configuration: Optional[shared_httpendpointrequestconfiguration.HTTPEndpointRequestConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestConfiguration') }})
    retry_options: Optional[shared_httpendpointretryoptions.HTTPEndpointRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[shared_httpendpoints3backupmode_enum.HTTPEndpointS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
