"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from enum import Enum
from typing import Optional

class GETRestoreFromClusterSnapshotActionEnum(str, Enum):
    RESTORE_FROM_CLUSTER_SNAPSHOT = 'RestoreFromClusterSnapshot'

class GETRestoreFromClusterSnapshotAquaConfigurationStatusEnum(str, Enum):
    r"""This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator)."""
    ENABLED = 'enabled'
    DISABLED = 'disabled'
    AUTO = 'auto'

class GETRestoreFromClusterSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = '2012-12-01'


@dataclasses.dataclass
class GETRestoreFromClusterSnapshotRequest:
    
    action: GETRestoreFromClusterSnapshotActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})  
    cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    r"""<p>The identifier of the cluster that will be created from restoring the snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an Amazon Web Services account.</p> </li> </ul>"""  
    version: GETRestoreFromClusterSnapshotVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})  
    additional_info: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AdditionalInfo', 'style': 'form', 'explode': True }})
    r"""Reserved."""  
    allow_version_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowVersionUpgrade', 'style': 'form', 'explode': True }})
    r"""<p>If <code>true</code>, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. </p> <p>Default: <code>true</code> </p>"""  
    aqua_configuration_status: Optional[GETRestoreFromClusterSnapshotAquaConfigurationStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AquaConfigurationStatus', 'style': 'form', 'explode': True }})
    r"""This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator)."""  
    automated_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AutomatedSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    r"""<p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p> <p>Default: The value selected for the cluster from which the snapshot was taken.</p> <p>Constraints: Must be a value from 0 to 35.</p>"""  
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    r"""<p>The Amazon EC2 Availability Zone in which to restore the cluster.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Example: <code>us-east-2a</code> </p>"""  
    availability_zone_relocation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZoneRelocation', 'style': 'form', 'explode': True }})
    r"""The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is restored."""  
    cluster_parameter_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ClusterParameterGroupName', 'style': 'form', 'explode': True }})
    r"""<p>The name of the parameter group to be associated with this cluster.</p> <p>Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to <a href=\\"https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html\\">Working with Amazon Redshift Parameter Groups</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>"""  
    cluster_security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ClusterSecurityGroups', 'style': 'form', 'explode': True }})
    r"""<p>A list of security groups to be associated with this cluster.</p> <p>Default: The default cluster security group for Amazon Redshift.</p> <p>Cluster security groups only apply to clusters outside of VPCs.</p>"""  
    cluster_subnet_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ClusterSubnetGroupName', 'style': 'form', 'explode': True }})
    r"""<p>The name of the subnet group where you want to cluster restored.</p> <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must provide subnet group name where you want the cluster restored.</p>"""  
    default_iam_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DefaultIamRoleArn', 'style': 'form', 'explode': True }})
    r"""The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified while it was restored from a snapshot."""  
    elastic_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ElasticIp', 'style': 'form', 'explode': True }})
    r"""The Elastic IP (EIP) address for the cluster. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on."""  
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Encrypted', 'style': 'form', 'explode': True }})
    r"""Enables support for restoring an unencrypted snapshot to a cluster encrypted with Key Management Service (KMS) and a customer managed key."""  
    enhanced_vpc_routing: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnhancedVpcRouting', 'style': 'form', 'explode': True }})
    r"""<p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href=\\"https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html\\">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>"""  
    hsm_client_certificate_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HsmClientCertificateIdentifier', 'style': 'form', 'explode': True }})
    r"""Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM."""  
    hsm_configuration_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HsmConfigurationIdentifier', 'style': 'form', 'explode': True }})
    r"""Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM."""  
    iam_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IamRoles', 'style': 'form', 'explode': True }})
    r"""<p>A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. </p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href=\\"https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html\\">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>"""  
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    r"""The Key Management Service (KMS) key ID of the encryption key that encrypts data in the cluster restored from a shared snapshot. You can also provide the key ID when you restore from an unencrypted snapshot to an encrypted cluster in the same account. Additionally, you can specify a new KMS key ID when you restore from an encrypted snapshot in the same account in order to change it. In that case, the restored cluster is encrypted with the new KMS key ID."""  
    maintenance_track_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaintenanceTrackName', 'style': 'form', 'explode': True }})
    r"""The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks."""  
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    r"""<p>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>"""  
    node_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NodeType', 'style': 'form', 'explode': True }})
    r"""<p>The node type that the restored cluster will be provisioned with.</p> <p>Default: The node type of the cluster from which the snapshot was taken. You can modify this if you are using any DS node type. In that case, you can choose to restore into another DS node type of the same size. For example, you can restore ds1.8xlarge into ds2.8xlarge, or ds1.xlarge into ds2.xlarge. If you have a DC instance type, you must restore into that same instance type and size. In other words, you can only restore a dc1.large instance type into another dc1.large instance type or dc2.large instance type. You can't restore dc1.8xlarge to dc2.8xlarge. First restore to a dc1.8xlarge cluster, then resize to a dc2.8large cluster. For more information about node types, see <a href=\\"https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes\\"> About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>"""  
    number_of_nodes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NumberOfNodes', 'style': 'form', 'explode': True }})
    r"""The number of nodes specified when provisioning the restored cluster."""  
    owner_account: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OwnerAccount', 'style': 'form', 'explode': True }})
    r"""The Amazon Web Services account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot."""  
    port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    r"""<p>The port number on which the cluster accepts connections.</p> <p>Default: The same port as the original cluster.</p> <p>Constraints: Must be between <code>1115</code> and <code>65535</code>.</p>"""  
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    r"""<p>The weekly time range (in UTC) during which automated cluster maintenance can occur.</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> Default: The value selected for the cluster from which the snapshot was taken. For more information about the time blocks for each region, see <a href=\\"https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows\\">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Minimum 30-minute window.</p>"""  
    publicly_accessible: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    r"""If <code>true</code>, the cluster can be accessed from a public network."""  
    reserved_node_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservedNodeId', 'style': 'form', 'explode': True }})
    r"""The identifier of the target reserved node offering."""  
    snapshot_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotArn', 'style': 'form', 'explode': True }})
    r"""The Amazon Resource Name (ARN) of the snapshot associated with the message to restore from a cluster. You must specify this parameter or <code>snapshotIdentifier</code>, but not both."""  
    snapshot_cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    r"""The name of the cluster the source snapshot was created from. This parameter is required if your IAM user or role has a policy containing a snapshot resource element that specifies anything other than * for the cluster name."""  
    snapshot_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotIdentifier', 'style': 'form', 'explode': True }})
    r"""<p>The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. You must specify this parameter or <code>snapshotArn</code>, but not both.</p> <p>Example: <code>my-snapshot-id</code> </p>"""  
    snapshot_schedule_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotScheduleIdentifier', 'style': 'form', 'explode': True }})
    r"""A unique identifier for the snapshot schedule."""  
    target_reserved_node_offering_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TargetReservedNodeOfferingId', 'style': 'form', 'explode': True }})
    r"""The identifier of the target reserved node offering."""  
    vpc_security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    r"""<p>A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.</p> <p>Default: The default VPC security group is associated with the cluster.</p> <p>VPC security groups only apply to clusters in VPCs.</p>"""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GETRestoreFromClusterSnapshotResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    