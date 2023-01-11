import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsrdspendingcloudwatchlogsexports as shared_awsrdspendingcloudwatchlogsexports
from ..shared import awsrdsdbprocessorfeature as shared_awsrdsdbprocessorfeature


@dataclass_json
@dataclasses.dataclass
class AwsRdsDbPendingModifiedValues:
    r"""AwsRdsDbPendingModifiedValues
    Changes to a DB instance that are currently pending.
    """
    
    allocated_storage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedStorage') }})
    backup_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPeriod') }})
    ca_certificate_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaCertificateIdentifier') }})
    db_instance_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbInstanceClass') }})
    db_instance_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbInstanceIdentifier') }})
    db_subnet_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupName') }})
    engine_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    iops: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    license_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseModel') }})
    master_user_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterUserPassword') }})
    multi_az: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAZ') }})
    pending_cloud_watch_logs_exports: Optional[shared_awsrdspendingcloudwatchlogsexports.AwsRdsPendingCloudWatchLogsExports] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingCloudWatchLogsExports') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    processor_features: Optional[list[shared_awsrdsdbprocessorfeature.AwsRdsDbProcessorFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessorFeatures') }})
    storage_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageType') }})
    
