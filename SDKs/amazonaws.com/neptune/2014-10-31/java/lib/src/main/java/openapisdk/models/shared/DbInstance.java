package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbInstance
 * <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
**/
public class DbInstance {
    public Long allocatedStorage;
    public DbInstance withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public Boolean autoMinorVersionUpgrade;
    public DbInstance withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    public String availabilityZone;
    public DbInstance withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbInstance withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String caCertificateIdentifier;
    public DbInstance withCaCertificateIdentifier(String caCertificateIdentifier) {
        this.caCertificateIdentifier = caCertificateIdentifier;
        return this;
    }
    public String characterSetName;
    public DbInstance withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
    public Boolean copyTagsToSnapshot;
    public DbInstance withCopyTagsToSnapshot(Boolean copyTagsToSnapshot) {
        this.copyTagsToSnapshot = copyTagsToSnapshot;
        return this;
    }
    public String dbClusterIdentifier;
    public DbInstance withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String dbInstanceArn;
    public DbInstance withDbInstanceArn(String dbInstanceArn) {
        this.dbInstanceArn = dbInstanceArn;
        return this;
    }
    public String dbInstanceClass;
    public DbInstance withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbInstance withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbInstanceStatus;
    public DbInstance withDbInstanceStatus(String dbInstanceStatus) {
        this.dbInstanceStatus = dbInstanceStatus;
        return this;
    }
    public String dbName;
    public DbInstance withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    public DbParameterGroupStatusList[] dbParameterGroups;
    public DbInstance withDbParameterGroups(DbParameterGroupStatusList[] dbParameterGroups) {
        this.dbParameterGroups = dbParameterGroups;
        return this;
    }
    public DbSecurityGroupMembershipList[] dbSecurityGroups;
    public DbInstance withDbSecurityGroups(DbSecurityGroupMembershipList[] dbSecurityGroups) {
        this.dbSecurityGroups = dbSecurityGroups;
        return this;
    }
    public DbSubnetGroup dbSubnetGroup;
    public DbInstance withDbSubnetGroup(DbSubnetGroup dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    public Long dbInstancePort;
    public DbInstance withDbInstancePort(Long dbInstancePort) {
        this.dbInstancePort = dbInstancePort;
        return this;
    }
    public String dbiResourceId;
    public DbInstance withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    public Boolean deletionProtection;
    public DbInstance withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    public DomainMembershipList[] domainMemberships;
    public DbInstance withDomainMemberships(DomainMembershipList[] domainMemberships) {
        this.domainMemberships = domainMemberships;
        return this;
    }
    public String[] enabledCloudwatchLogsExports;
    public DbInstance withEnabledCloudwatchLogsExports(String[] enabledCloudwatchLogsExports) {
        this.enabledCloudwatchLogsExports = enabledCloudwatchLogsExports;
        return this;
    }
    public Endpoint endpoint;
    public DbInstance withEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engine;
    public DbInstance withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbInstance withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String enhancedMonitoringResourceArn;
    public DbInstance withEnhancedMonitoringResourceArn(String enhancedMonitoringResourceArn) {
        this.enhancedMonitoringResourceArn = enhancedMonitoringResourceArn;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbInstance withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbInstance withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbInstance withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String kmsKeyId;
    public DbInstance withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public OffsetDateTime latestRestorableTime;
    public DbInstance withLatestRestorableTime(OffsetDateTime latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    public String licenseModel;
    public DbInstance withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbInstance withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Long monitoringInterval;
    public DbInstance withMonitoringInterval(Long monitoringInterval) {
        this.monitoringInterval = monitoringInterval;
        return this;
    }
    public String monitoringRoleArn;
    public DbInstance withMonitoringRoleArn(String monitoringRoleArn) {
        this.monitoringRoleArn = monitoringRoleArn;
        return this;
    }
    public Boolean multiAZ;
    public DbInstance withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public OptionGroupMembershipList[] optionGroupMemberships;
    public DbInstance withOptionGroupMemberships(OptionGroupMembershipList[] optionGroupMemberships) {
        this.optionGroupMemberships = optionGroupMemberships;
        return this;
    }
    public PendingModifiedValues pendingModifiedValues;
    public DbInstance withPendingModifiedValues(PendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public Boolean performanceInsightsEnabled;
    public DbInstance withPerformanceInsightsEnabled(Boolean performanceInsightsEnabled) {
        this.performanceInsightsEnabled = performanceInsightsEnabled;
        return this;
    }
    public String performanceInsightsKMSKeyId;
    public DbInstance withPerformanceInsightsKmsKeyId(String performanceInsightsKMSKeyId) {
        this.performanceInsightsKMSKeyId = performanceInsightsKMSKeyId;
        return this;
    }
    public String preferredBackupWindow;
    public DbInstance withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    public String preferredMaintenanceWindow;
    public DbInstance withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public Long promotionTier;
    public DbInstance withPromotionTier(Long promotionTier) {
        this.promotionTier = promotionTier;
        return this;
    }
    public java.util.Map<String, Object> publiclyAccessible;
    public DbInstance withPubliclyAccessible(java.util.Map<String, Object> publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    public java.util.Map<String, Object>[] readReplicaDBClusterIdentifiers;
    public DbInstance withReadReplicaDbClusterIdentifiers(java.util.Map<String, Object>[] readReplicaDBClusterIdentifiers) {
        this.readReplicaDBClusterIdentifiers = readReplicaDBClusterIdentifiers;
        return this;
    }
    public java.util.Map<String, Object>[] readReplicaDBInstanceIdentifiers;
    public DbInstance withReadReplicaDbInstanceIdentifiers(java.util.Map<String, Object>[] readReplicaDBInstanceIdentifiers) {
        this.readReplicaDBInstanceIdentifiers = readReplicaDBInstanceIdentifiers;
        return this;
    }
    public String readReplicaSourceDBInstanceIdentifier;
    public DbInstance withReadReplicaSourceDbInstanceIdentifier(String readReplicaSourceDBInstanceIdentifier) {
        this.readReplicaSourceDBInstanceIdentifier = readReplicaSourceDBInstanceIdentifier;
        return this;
    }
    public String secondaryAvailabilityZone;
    public DbInstance withSecondaryAvailabilityZone(String secondaryAvailabilityZone) {
        this.secondaryAvailabilityZone = secondaryAvailabilityZone;
        return this;
    }
    public DbInstanceStatusInfoList[] statusInfos;
    public DbInstance withStatusInfos(DbInstanceStatusInfoList[] statusInfos) {
        this.statusInfos = statusInfos;
        return this;
    }
    public Boolean storageEncrypted;
    public DbInstance withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    public String storageType;
    public DbInstance withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    public String tdeCredentialArn;
    public DbInstance withTdeCredentialArn(String tdeCredentialArn) {
        this.tdeCredentialArn = tdeCredentialArn;
        return this;
    }
    public String timezone;
    public DbInstance withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbInstance withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}