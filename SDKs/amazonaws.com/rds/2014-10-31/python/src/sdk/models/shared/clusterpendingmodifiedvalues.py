import dataclasses
from typing import Optional
from ..shared import pendingcloudwatchlogsexports as shared_pendingcloudwatchlogsexports


@dataclasses.dataclass
class ClusterPendingModifiedValues:
    r"""ClusterPendingModifiedValues
    This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
    """
    
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None)
    master_user_password: Optional[str] = dataclasses.field(default=None)
    pending_cloudwatch_logs_exports: Optional[shared_pendingcloudwatchlogsexports.PendingCloudwatchLogsExports] = dataclasses.field(default=None)
    
