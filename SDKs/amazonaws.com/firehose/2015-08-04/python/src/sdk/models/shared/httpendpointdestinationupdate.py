import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
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
from ..shared import s3destinationupdate as shared_s3destinationupdate


@dataclass_json
@dataclasses.dataclass
class HTTPEndpointDestinationUpdate:
    r"""HTTPEndpointDestinationUpdate
    Updates the specified HTTP endpoint destination.
    """
    
    buffering_hints: Optional[shared_httpendpointbufferinghints.HTTPEndpointBufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    endpoint_configuration: Optional[shared_httpendpointconfiguration.HTTPEndpointConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfiguration') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    request_configuration: Optional[shared_httpendpointrequestconfiguration.HTTPEndpointRequestConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestConfiguration') }})
    retry_options: Optional[shared_httpendpointretryoptions.HTTPEndpointRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[shared_httpendpoints3backupmode_enum.HTTPEndpointS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_update: Optional[shared_s3destinationupdate.S3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Update') }})
    
