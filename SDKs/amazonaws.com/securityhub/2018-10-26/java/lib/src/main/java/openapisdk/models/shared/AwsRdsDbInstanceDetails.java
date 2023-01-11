package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbInstanceDetails
 * Contains the details of an Amazon RDS DB instance.
**/
public class AwsRdsDbInstanceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedStorage")
    public Long allocatedStorage;
    public AwsRdsDbInstanceDetails withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedRoles")
    public AwsRdsDbInstanceAssociatedRole[] associatedRoles;
    public AwsRdsDbInstanceDetails withAssociatedRoles(AwsRdsDbInstanceAssociatedRole[] associatedRoles) {
        this.associatedRoles = associatedRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public AwsRdsDbInstanceDetails withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public AwsRdsDbInstanceDetails withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupRetentionPeriod")
    public Long backupRetentionPeriod;
    public AwsRdsDbInstanceDetails withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CACertificateIdentifier")
    public String caCertificateIdentifier;
    public AwsRdsDbInstanceDetails withCaCertificateIdentifier(String caCertificateIdentifier) {
        this.caCertificateIdentifier = caCertificateIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CharacterSetName")
    public String characterSetName;
    public AwsRdsDbInstanceDetails withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyTagsToSnapshot")
    public Boolean copyTagsToSnapshot;
    public AwsRdsDbInstanceDetails withCopyTagsToSnapshot(Boolean copyTagsToSnapshot) {
        this.copyTagsToSnapshot = copyTagsToSnapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DBClusterIdentifier")
    public String dbClusterIdentifier;
    public AwsRdsDbInstanceDetails withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DBInstanceClass")
    public String dbInstanceClass;
    public AwsRdsDbInstanceDetails withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public AwsRdsDbInstanceDetails withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DBName")
    public String dbName;
    public AwsRdsDbInstanceDetails withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbInstancePort")
    public Long dbInstancePort;
    public AwsRdsDbInstanceDetails withDbInstancePort(Long dbInstancePort) {
        this.dbInstancePort = dbInstancePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbInstanceStatus")
    public String dbInstanceStatus;
    public AwsRdsDbInstanceDetails withDbInstanceStatus(String dbInstanceStatus) {
        this.dbInstanceStatus = dbInstanceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbParameterGroups")
    public AwsRdsDbParameterGroup[] dbParameterGroups;
    public AwsRdsDbInstanceDetails withDbParameterGroups(AwsRdsDbParameterGroup[] dbParameterGroups) {
        this.dbParameterGroups = dbParameterGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbSecurityGroups")
    public String[] dbSecurityGroups;
    public AwsRdsDbInstanceDetails withDbSecurityGroups(String[] dbSecurityGroups) {
        this.dbSecurityGroups = dbSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbSubnetGroup")
    public AwsRdsDbSubnetGroup dbSubnetGroup;
    public AwsRdsDbInstanceDetails withDbSubnetGroup(AwsRdsDbSubnetGroup dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbiResourceId")
    public String dbiResourceId;
    public AwsRdsDbInstanceDetails withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeletionProtection")
    public Boolean deletionProtection;
    public AwsRdsDbInstanceDetails withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainMemberships")
    public AwsRdsDbDomainMembership[] domainMemberships;
    public AwsRdsDbInstanceDetails withDomainMemberships(AwsRdsDbDomainMembership[] domainMemberships) {
        this.domainMemberships = domainMemberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnabledCloudWatchLogsExports")
    public String[] enabledCloudWatchLogsExports;
    public AwsRdsDbInstanceDetails withEnabledCloudWatchLogsExports(String[] enabledCloudWatchLogsExports) {
        this.enabledCloudWatchLogsExports = enabledCloudWatchLogsExports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public AwsRdsDbInstanceEndpoint endpoint;
    public AwsRdsDbInstanceDetails withEndpoint(AwsRdsDbInstanceEndpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Engine")
    public String engine;
    public AwsRdsDbInstanceDetails withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public AwsRdsDbInstanceDetails withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnhancedMonitoringResourceArn")
    public String enhancedMonitoringResourceArn;
    public AwsRdsDbInstanceDetails withEnhancedMonitoringResourceArn(String enhancedMonitoringResourceArn) {
        this.enhancedMonitoringResourceArn = enhancedMonitoringResourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IAMDatabaseAuthenticationEnabled")
    public Boolean iamDatabaseAuthenticationEnabled;
    public AwsRdsDbInstanceDetails withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceCreateTime")
    public String instanceCreateTime;
    public AwsRdsDbInstanceDetails withInstanceCreateTime(String instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iops")
    public Long iops;
    public AwsRdsDbInstanceDetails withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public AwsRdsDbInstanceDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestRestorableTime")
    public String latestRestorableTime;
    public AwsRdsDbInstanceDetails withLatestRestorableTime(String latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseModel")
    public String licenseModel;
    public AwsRdsDbInstanceDetails withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListenerEndpoint")
    public AwsRdsDbInstanceEndpoint listenerEndpoint;
    public AwsRdsDbInstanceDetails withListenerEndpoint(AwsRdsDbInstanceEndpoint listenerEndpoint) {
        this.listenerEndpoint = listenerEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MasterUsername")
    public String masterUsername;
    public AwsRdsDbInstanceDetails withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAllocatedStorage")
    public Long maxAllocatedStorage;
    public AwsRdsDbInstanceDetails withMaxAllocatedStorage(Long maxAllocatedStorage) {
        this.maxAllocatedStorage = maxAllocatedStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoringInterval")
    public Long monitoringInterval;
    public AwsRdsDbInstanceDetails withMonitoringInterval(Long monitoringInterval) {
        this.monitoringInterval = monitoringInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoringRoleArn")
    public String monitoringRoleArn;
    public AwsRdsDbInstanceDetails withMonitoringRoleArn(String monitoringRoleArn) {
        this.monitoringRoleArn = monitoringRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAz")
    public Boolean multiAz;
    public AwsRdsDbInstanceDetails withMultiAz(Boolean multiAz) {
        this.multiAz = multiAz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptionGroupMemberships")
    public AwsRdsDbOptionGroupMembership[] optionGroupMemberships;
    public AwsRdsDbInstanceDetails withOptionGroupMemberships(AwsRdsDbOptionGroupMembership[] optionGroupMemberships) {
        this.optionGroupMemberships = optionGroupMemberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingModifiedValues")
    public AwsRdsDbPendingModifiedValues pendingModifiedValues;
    public AwsRdsDbInstanceDetails withPendingModifiedValues(AwsRdsDbPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformanceInsightsEnabled")
    public Boolean performanceInsightsEnabled;
    public AwsRdsDbInstanceDetails withPerformanceInsightsEnabled(Boolean performanceInsightsEnabled) {
        this.performanceInsightsEnabled = performanceInsightsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformanceInsightsKmsKeyId")
    public String performanceInsightsKmsKeyId;
    public AwsRdsDbInstanceDetails withPerformanceInsightsKmsKeyId(String performanceInsightsKmsKeyId) {
        this.performanceInsightsKmsKeyId = performanceInsightsKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformanceInsightsRetentionPeriod")
    public Long performanceInsightsRetentionPeriod;
    public AwsRdsDbInstanceDetails withPerformanceInsightsRetentionPeriod(Long performanceInsightsRetentionPeriod) {
        this.performanceInsightsRetentionPeriod = performanceInsightsRetentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredBackupWindow")
    public String preferredBackupWindow;
    public AwsRdsDbInstanceDetails withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public AwsRdsDbInstanceDetails withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessorFeatures")
    public AwsRdsDbProcessorFeature[] processorFeatures;
    public AwsRdsDbInstanceDetails withProcessorFeatures(AwsRdsDbProcessorFeature[] processorFeatures) {
        this.processorFeatures = processorFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PromotionTier")
    public Long promotionTier;
    public AwsRdsDbInstanceDetails withPromotionTier(Long promotionTier) {
        this.promotionTier = promotionTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PubliclyAccessible")
    public Boolean publiclyAccessible;
    public AwsRdsDbInstanceDetails withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadReplicaDBClusterIdentifiers")
    public String[] readReplicaDBClusterIdentifiers;
    public AwsRdsDbInstanceDetails withReadReplicaDbClusterIdentifiers(String[] readReplicaDBClusterIdentifiers) {
        this.readReplicaDBClusterIdentifiers = readReplicaDBClusterIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadReplicaDBInstanceIdentifiers")
    public String[] readReplicaDBInstanceIdentifiers;
    public AwsRdsDbInstanceDetails withReadReplicaDbInstanceIdentifiers(String[] readReplicaDBInstanceIdentifiers) {
        this.readReplicaDBInstanceIdentifiers = readReplicaDBInstanceIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadReplicaSourceDBInstanceIdentifier")
    public String readReplicaSourceDBInstanceIdentifier;
    public AwsRdsDbInstanceDetails withReadReplicaSourceDbInstanceIdentifier(String readReplicaSourceDBInstanceIdentifier) {
        this.readReplicaSourceDBInstanceIdentifier = readReplicaSourceDBInstanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryAvailabilityZone")
    public String secondaryAvailabilityZone;
    public AwsRdsDbInstanceDetails withSecondaryAvailabilityZone(String secondaryAvailabilityZone) {
        this.secondaryAvailabilityZone = secondaryAvailabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusInfos")
    public AwsRdsDbStatusInfo[] statusInfos;
    public AwsRdsDbInstanceDetails withStatusInfos(AwsRdsDbStatusInfo[] statusInfos) {
        this.statusInfos = statusInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageEncrypted")
    public Boolean storageEncrypted;
    public AwsRdsDbInstanceDetails withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageType")
    public String storageType;
    public AwsRdsDbInstanceDetails withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TdeCredentialArn")
    public String tdeCredentialArn;
    public AwsRdsDbInstanceDetails withTdeCredentialArn(String tdeCredentialArn) {
        this.tdeCredentialArn = tdeCredentialArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timezone")
    public String timezone;
    public AwsRdsDbInstanceDetails withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroups")
    public AwsRdsDbInstanceVpcSecurityGroup[] vpcSecurityGroups;
    public AwsRdsDbInstanceDetails withVpcSecurityGroups(AwsRdsDbInstanceVpcSecurityGroup[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}