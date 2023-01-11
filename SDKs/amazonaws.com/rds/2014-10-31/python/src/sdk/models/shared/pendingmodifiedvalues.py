import dataclasses
from typing import Optional
from ..shared import pendingcloudwatchlogsexports as shared_pendingcloudwatchlogsexports
from ..shared import processorfeaturelist as shared_processorfeaturelist


@dataclasses.dataclass
class PendingModifiedValues:
    r"""PendingModifiedValues
     This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window. 
    """
    
    allocated_storage: Optional[int] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    ca_certificate_identifier: Optional[str] = dataclasses.field(default=None)
    db_instance_class: Optional[str] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    db_subnet_group_name: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None)
    iops: Optional[int] = dataclasses.field(default=None)
    license_model: Optional[str] = dataclasses.field(default=None)
    master_user_password: Optional[str] = dataclasses.field(default=None)
    multi_az: Optional[bool] = dataclasses.field(default=None)
    pending_cloudwatch_logs_exports: Optional[shared_pendingcloudwatchlogsexports.PendingCloudwatchLogsExports] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    processor_features: Optional[list[shared_processorfeaturelist.ProcessorFeatureList]] = dataclasses.field(default=None)
    storage_type: Optional[str] = dataclasses.field(default=None)
    
