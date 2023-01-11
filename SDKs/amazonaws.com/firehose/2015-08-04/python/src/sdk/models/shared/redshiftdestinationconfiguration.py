import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import copycommand as shared_copycommand
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import redshiftretryoptions as shared_redshiftretryoptions
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration
from ..shared import redshifts3backupmode_enum as shared_redshifts3backupmode_enum


@dataclass_json
@dataclasses.dataclass
class RedshiftDestinationConfiguration:
    r"""RedshiftDestinationConfiguration
    Describes the configuration of a destination in Amazon Redshift.
    """
    
    cluster_jdbcurl: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterJDBCURL') }})
    copy_command: shared_copycommand.CopyCommand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyCommand') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_configuration: shared_s3destinationconfiguration.S3DestinationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[shared_redshiftretryoptions.RedshiftRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_configuration: Optional[shared_s3destinationconfiguration.S3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupConfiguration') }})
    s3_backup_mode: Optional[shared_redshifts3backupmode_enum.RedshiftS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
