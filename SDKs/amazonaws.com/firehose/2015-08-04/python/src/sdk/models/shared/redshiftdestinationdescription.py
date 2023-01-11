import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import copycommand as shared_copycommand
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import redshiftretryoptions as shared_redshiftretryoptions
from ..shared import s3destinationdescription as shared_s3destinationdescription
from ..shared import redshifts3backupmode_enum as shared_redshifts3backupmode_enum


@dataclass_json
@dataclasses.dataclass
class RedshiftDestinationDescription:
    r"""RedshiftDestinationDescription
    Describes a destination in Amazon Redshift.
    """
    
    cluster_jdbcurl: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterJDBCURL') }})
    copy_command: shared_copycommand.CopyCommand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyCommand') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_destination_description: shared_s3destinationdescription.S3DestinationDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[shared_redshiftretryoptions.RedshiftRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_description: Optional[shared_s3destinationdescription.S3DestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupDescription') }})
    s3_backup_mode: Optional[shared_redshifts3backupmode_enum.RedshiftS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
