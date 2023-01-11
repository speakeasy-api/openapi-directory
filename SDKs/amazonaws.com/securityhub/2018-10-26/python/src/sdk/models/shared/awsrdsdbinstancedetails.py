import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsrdsdbinstanceassociatedrole as shared_awsrdsdbinstanceassociatedrole
from ..shared import awsrdsdbparametergroup as shared_awsrdsdbparametergroup
from ..shared import awsrdsdbsubnetgroup as shared_awsrdsdbsubnetgroup
from ..shared import awsrdsdbdomainmembership as shared_awsrdsdbdomainmembership
from ..shared import awsrdsdbinstanceendpoint as shared_awsrdsdbinstanceendpoint
from ..shared import awsrdsdboptiongroupmembership as shared_awsrdsdboptiongroupmembership
from ..shared import awsrdsdbpendingmodifiedvalues as shared_awsrdsdbpendingmodifiedvalues
from ..shared import awsrdsdbprocessorfeature as shared_awsrdsdbprocessorfeature
from ..shared import awsrdsdbstatusinfo as shared_awsrdsdbstatusinfo
from ..shared import awsrdsdbinstancevpcsecuritygroup as shared_awsrdsdbinstancevpcsecuritygroup


@dataclass_json
@dataclasses.dataclass
class AwsRdsDbInstanceDetails:
    r"""AwsRdsDbInstanceDetails
    Contains the details of an Amazon RDS DB instance.
    """
    
    allocated_storage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedStorage') }})
    associated_roles: Optional[list[shared_awsrdsdbinstanceassociatedrole.AwsRdsDbInstanceAssociatedRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatedRoles') }})
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMinorVersionUpgrade') }})
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    backup_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPeriod') }})
    ca_certificate_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CACertificateIdentifier') }})
    character_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CharacterSetName') }})
    copy_tags_to_snapshot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTagsToSnapshot') }})
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBClusterIdentifier') }})
    db_instance_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBInstanceClass') }})
    db_instance_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBInstanceIdentifier') }})
    db_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBName') }})
    db_instance_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbInstancePort') }})
    db_instance_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbInstanceStatus') }})
    db_parameter_groups: Optional[list[shared_awsrdsdbparametergroup.AwsRdsDbParameterGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbParameterGroups') }})
    db_security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSecurityGroups') }})
    db_subnet_group: Optional[shared_awsrdsdbsubnetgroup.AwsRdsDbSubnetGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroup') }})
    dbi_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbiResourceId') }})
    deletion_protection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionProtection') }})
    domain_memberships: Optional[list[shared_awsrdsdbdomainmembership.AwsRdsDbDomainMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainMemberships') }})
    enabled_cloud_watch_logs_exports: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnabledCloudWatchLogsExports') }})
    endpoint: Optional[shared_awsrdsdbinstanceendpoint.AwsRdsDbInstanceEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Engine') }})
    engine_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    enhanced_monitoring_resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedMonitoringResourceArn') }})
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IAMDatabaseAuthenticationEnabled') }})
    instance_create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCreateTime') }})
    iops: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    latest_restorable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestRestorableTime') }})
    license_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseModel') }})
    listener_endpoint: Optional[shared_awsrdsdbinstanceendpoint.AwsRdsDbInstanceEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerEndpoint') }})
    master_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterUsername') }})
    max_allocated_storage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAllocatedStorage') }})
    monitoring_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringInterval') }})
    monitoring_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringRoleArn') }})
    multi_az: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAz') }})
    option_group_memberships: Optional[list[shared_awsrdsdboptiongroupmembership.AwsRdsDbOptionGroupMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionGroupMemberships') }})
    pending_modified_values: Optional[shared_awsrdsdbpendingmodifiedvalues.AwsRdsDbPendingModifiedValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingModifiedValues') }})
    performance_insights_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceInsightsEnabled') }})
    performance_insights_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceInsightsKmsKeyId') }})
    performance_insights_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceInsightsRetentionPeriod') }})
    preferred_backup_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    processor_features: Optional[list[shared_awsrdsdbprocessorfeature.AwsRdsDbProcessorFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessorFeatures') }})
    promotion_tier: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PromotionTier') }})
    publicly_accessible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PubliclyAccessible') }})
    read_replica_db_cluster_identifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadReplicaDBClusterIdentifiers') }})
    read_replica_db_instance_identifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadReplicaDBInstanceIdentifiers') }})
    read_replica_source_db_instance_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadReplicaSourceDBInstanceIdentifier') }})
    secondary_availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryAvailabilityZone') }})
    status_infos: Optional[list[shared_awsrdsdbstatusinfo.AwsRdsDbStatusInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusInfos') }})
    storage_encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageEncrypted') }})
    storage_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageType') }})
    tde_credential_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TdeCredentialArn') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    vpc_security_groups: Optional[list[shared_awsrdsdbinstancevpcsecuritygroup.AwsRdsDbInstanceVpcSecurityGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroups') }})
    
