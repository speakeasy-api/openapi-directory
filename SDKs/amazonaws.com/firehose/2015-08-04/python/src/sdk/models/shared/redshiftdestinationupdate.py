import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import copycommand as shared_copycommand
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import redshiftretryoptions as shared_redshiftretryoptions
from ..shared import redshifts3backupmode_enum as shared_redshifts3backupmode_enum
from ..shared import s3destinationupdate as shared_s3destinationupdate


@dataclass_json
@dataclasses.dataclass
class RedshiftDestinationUpdate:
    r"""RedshiftDestinationUpdate
    Describes an update for a destination in Amazon Redshift.
    """
    
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    cluster_jdbcurl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterJDBCURL') }})
    copy_command: Optional[shared_copycommand.CopyCommand] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyCommand') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[shared_redshiftretryoptions.RedshiftRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[shared_redshifts3backupmode_enum.RedshiftS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_backup_update: Optional[shared_s3destinationupdate.S3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupUpdate') }})
    s3_update: Optional[shared_s3destinationupdate.S3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Update') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
