import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import activitystreammode_enum as shared_activitystreammode_enum
from ..shared import activitystreamstatus_enum as shared_activitystreamstatus_enum
from ..shared import dbinstanceroles as shared_dbinstanceroles
from ..shared import dbinstanceautomatedbackupsreplicationlist as shared_dbinstanceautomatedbackupsreplicationlist
from ..shared import dbparametergroupstatuslist as shared_dbparametergroupstatuslist
from ..shared import dbsecuritygroupmembershiplist as shared_dbsecuritygroupmembershiplist
from ..shared import dbsubnetgroup as shared_dbsubnetgroup
from ..shared import domainmembershiplist as shared_domainmembershiplist
from ..shared import endpoint as shared_endpoint
from ..shared import optiongroupmembershiplist as shared_optiongroupmembershiplist
from ..shared import pendingmodifiedvalues as shared_pendingmodifiedvalues
from ..shared import processorfeaturelist as shared_processorfeaturelist
from ..shared import replicamode_enum as shared_replicamode_enum
from ..shared import dbinstancestatusinfolist as shared_dbinstancestatusinfolist
from ..shared import taglist as shared_taglist
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class DbInstanceList:
    r"""DbInstanceList
    <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
    """
    
    activity_stream_engine_native_audit_fields_included: Optional[bool] = dataclasses.field(default=None)
    activity_stream_kinesis_stream_name: Optional[str] = dataclasses.field(default=None)
    activity_stream_kms_key_id: Optional[str] = dataclasses.field(default=None)
    activity_stream_mode: Optional[shared_activitystreammode_enum.ActivityStreamModeEnum] = dataclasses.field(default=None)
    activity_stream_status: Optional[shared_activitystreamstatus_enum.ActivityStreamStatusEnum] = dataclasses.field(default=None)
    allocated_storage: Optional[int] = dataclasses.field(default=None)
    associated_roles: Optional[list[shared_dbinstanceroles.DbInstanceRoles]] = dataclasses.field(default=None)
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    automatic_restart_time: Optional[datetime] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    aws_backup_recovery_point_arn: Optional[str] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    ca_certificate_identifier: Optional[str] = dataclasses.field(default=None)
    character_set_name: Optional[str] = dataclasses.field(default=None)
    copy_tags_to_snapshot: Optional[bool] = dataclasses.field(default=None)
    customer_owned_ip_enabled: Optional[bool] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    db_instance_arn: Optional[str] = dataclasses.field(default=None)
    db_instance_automated_backups_replications: Optional[list[shared_dbinstanceautomatedbackupsreplicationlist.DbInstanceAutomatedBackupsReplicationList]] = dataclasses.field(default=None)
    db_instance_class: Optional[str] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    db_instance_status: Optional[str] = dataclasses.field(default=None)
    db_name: Optional[str] = dataclasses.field(default=None)
    db_parameter_groups: Optional[list[shared_dbparametergroupstatuslist.DbParameterGroupStatusList]] = dataclasses.field(default=None)
    db_security_groups: Optional[list[shared_dbsecuritygroupmembershiplist.DbSecurityGroupMembershipList]] = dataclasses.field(default=None)
    db_subnet_group: Optional[shared_dbsubnetgroup.DbSubnetGroup] = dataclasses.field(default=None)
    db_instance_port: Optional[int] = dataclasses.field(default=None)
    dbi_resource_id: Optional[str] = dataclasses.field(default=None)
    deletion_protection: Optional[bool] = dataclasses.field(default=None)
    domain_memberships: Optional[list[shared_domainmembershiplist.DomainMembershipList]] = dataclasses.field(default=None)
    enabled_cloudwatch_logs_exports: Optional[list[str]] = dataclasses.field(default=None)
    endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    enhanced_monitoring_resource_arn: Optional[str] = dataclasses.field(default=None)
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None)
    instance_create_time: Optional[datetime] = dataclasses.field(default=None)
    iops: Optional[int] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    latest_restorable_time: Optional[datetime] = dataclasses.field(default=None)
    license_model: Optional[str] = dataclasses.field(default=None)
    listener_endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    max_allocated_storage: Optional[int] = dataclasses.field(default=None)
    monitoring_interval: Optional[int] = dataclasses.field(default=None)
    monitoring_role_arn: Optional[str] = dataclasses.field(default=None)
    multi_az: Optional[bool] = dataclasses.field(default=None)
    nchar_character_set_name: Optional[str] = dataclasses.field(default=None)
    option_group_memberships: Optional[list[shared_optiongroupmembershiplist.OptionGroupMembershipList]] = dataclasses.field(default=None)
    pending_modified_values: Optional[shared_pendingmodifiedvalues.PendingModifiedValues] = dataclasses.field(default=None)
    performance_insights_enabled: Optional[bool] = dataclasses.field(default=None)
    performance_insights_kms_key_id: Optional[str] = dataclasses.field(default=None)
    performance_insights_retention_period: Optional[int] = dataclasses.field(default=None)
    preferred_backup_window: Optional[str] = dataclasses.field(default=None)
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None)
    processor_features: Optional[list[shared_processorfeaturelist.ProcessorFeatureList]] = dataclasses.field(default=None)
    promotion_tier: Optional[int] = dataclasses.field(default=None)
    publicly_accessible: Optional[bool] = dataclasses.field(default=None)
    read_replica_db_cluster_identifiers: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    read_replica_db_instance_identifiers: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    read_replica_source_db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    replica_mode: Optional[shared_replicamode_enum.ReplicaModeEnum] = dataclasses.field(default=None)
    secondary_availability_zone: Optional[str] = dataclasses.field(default=None)
    status_infos: Optional[list[shared_dbinstancestatusinfolist.DbInstanceStatusInfoList]] = dataclasses.field(default=None)
    storage_encrypted: Optional[bool] = dataclasses.field(default=None)
    storage_type: Optional[str] = dataclasses.field(default=None)
    tag_list: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    tde_credential_arn: Optional[str] = dataclasses.field(default=None)
    timezone: Optional[str] = dataclasses.field(default=None)
    vpc_security_groups: Optional[list[shared_vpcsecuritygroupmembershiplist.VpcSecurityGroupMembershipList]] = dataclasses.field(default=None)
    
