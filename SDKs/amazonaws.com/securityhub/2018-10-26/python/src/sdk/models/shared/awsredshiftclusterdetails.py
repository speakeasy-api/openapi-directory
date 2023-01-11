import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsredshiftclusterclusternode as shared_awsredshiftclusterclusternode
from ..shared import awsredshiftclusterclusterparametergroup as shared_awsredshiftclusterclusterparametergroup
from ..shared import awsredshiftclusterclustersecuritygroup as shared_awsredshiftclusterclustersecuritygroup
from ..shared import awsredshiftclusterclustersnapshotcopystatus as shared_awsredshiftclusterclustersnapshotcopystatus
from ..shared import awsredshiftclusterdeferredmaintenancewindow as shared_awsredshiftclusterdeferredmaintenancewindow
from ..shared import awsredshiftclusterelasticipstatus as shared_awsredshiftclusterelasticipstatus
from ..shared import awsredshiftclusterendpoint as shared_awsredshiftclusterendpoint
from ..shared import awsredshiftclusterhsmstatus as shared_awsredshiftclusterhsmstatus
from ..shared import awsredshiftclusteriamrole as shared_awsredshiftclusteriamrole
from ..shared import awsredshiftclusterpendingmodifiedvalues as shared_awsredshiftclusterpendingmodifiedvalues
from ..shared import awsredshiftclusterresizeinfo as shared_awsredshiftclusterresizeinfo
from ..shared import awsredshiftclusterrestorestatus as shared_awsredshiftclusterrestorestatus
from ..shared import awsredshiftclustervpcsecuritygroup as shared_awsredshiftclustervpcsecuritygroup


@dataclass_json
@dataclasses.dataclass
class AwsRedshiftClusterDetails:
    r"""AwsRedshiftClusterDetails
    Details about an Amazon Redshift cluster.
    """
    
    allow_version_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowVersionUpgrade') }})
    automated_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomatedSnapshotRetentionPeriod') }})
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    cluster_availability_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterAvailabilityStatus') }})
    cluster_create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterCreateTime') }})
    cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    cluster_nodes: Optional[list[shared_awsredshiftclusterclusternode.AwsRedshiftClusterClusterNode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterNodes') }})
    cluster_parameter_groups: Optional[list[shared_awsredshiftclusterclusterparametergroup.AwsRedshiftClusterClusterParameterGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterParameterGroups') }})
    cluster_public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterPublicKey') }})
    cluster_revision_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterRevisionNumber') }})
    cluster_security_groups: Optional[list[shared_awsredshiftclusterclustersecuritygroup.AwsRedshiftClusterClusterSecurityGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSecurityGroups') }})
    cluster_snapshot_copy_status: Optional[shared_awsredshiftclusterclustersnapshotcopystatus.AwsRedshiftClusterClusterSnapshotCopyStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSnapshotCopyStatus') }})
    cluster_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterStatus') }})
    cluster_subnet_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSubnetGroupName') }})
    cluster_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterVersion') }})
    db_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBName') }})
    deferred_maintenance_windows: Optional[list[shared_awsredshiftclusterdeferredmaintenancewindow.AwsRedshiftClusterDeferredMaintenanceWindow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferredMaintenanceWindows') }})
    elastic_ip_status: Optional[shared_awsredshiftclusterelasticipstatus.AwsRedshiftClusterElasticIPStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIpStatus') }})
    elastic_resize_number_of_node_options: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticResizeNumberOfNodeOptions') }})
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    endpoint: Optional[shared_awsredshiftclusterendpoint.AwsRedshiftClusterEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    enhanced_vpc_routing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedVpcRouting') }})
    expected_next_snapshot_schedule_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedNextSnapshotScheduleTime') }})
    expected_next_snapshot_schedule_time_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedNextSnapshotScheduleTimeStatus') }})
    hsm_status: Optional[shared_awsredshiftclusterhsmstatus.AwsRedshiftClusterHsmStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmStatus') }})
    iam_roles: Optional[list[shared_awsredshiftclusteriamrole.AwsRedshiftClusterIamRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoles') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    maintenance_track_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceTrackName') }})
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManualSnapshotRetentionPeriod') }})
    master_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterUsername') }})
    next_maintenance_window_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMaintenanceWindowStartTime') }})
    node_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    number_of_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNodes') }})
    pending_actions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingActions') }})
    pending_modified_values: Optional[shared_awsredshiftclusterpendingmodifiedvalues.AwsRedshiftClusterPendingModifiedValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingModifiedValues') }})
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    publicly_accessible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PubliclyAccessible') }})
    resize_info: Optional[shared_awsredshiftclusterresizeinfo.AwsRedshiftClusterResizeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResizeInfo') }})
    restore_status: Optional[shared_awsredshiftclusterrestorestatus.AwsRedshiftClusterRestoreStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreStatus') }})
    snapshot_schedule_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotScheduleIdentifier') }})
    snapshot_schedule_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotScheduleState') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    vpc_security_groups: Optional[list[shared_awsredshiftclustervpcsecuritygroup.AwsRedshiftClusterVpcSecurityGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroups') }})
    
