package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbInstanceList
 * Detailed information about an instance. 
**/
public class DbInstanceList {
    public Boolean autoMinorVersionUpgrade;
    public DbInstanceList withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    public String availabilityZone;
    public DbInstanceList withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbInstanceList withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String caCertificateIdentifier;
    public DbInstanceList withCaCertificateIdentifier(String caCertificateIdentifier) {
        this.caCertificateIdentifier = caCertificateIdentifier;
        return this;
    }
    public String dbClusterIdentifier;
    public DbInstanceList withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String dbInstanceArn;
    public DbInstanceList withDbInstanceArn(String dbInstanceArn) {
        this.dbInstanceArn = dbInstanceArn;
        return this;
    }
    public String dbInstanceClass;
    public DbInstanceList withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbInstanceList withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbInstanceStatus;
    public DbInstanceList withDbInstanceStatus(String dbInstanceStatus) {
        this.dbInstanceStatus = dbInstanceStatus;
        return this;
    }
    public DbSubnetGroup dbSubnetGroup;
    public DbInstanceList withDbSubnetGroup(DbSubnetGroup dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    public String dbiResourceId;
    public DbInstanceList withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    public String[] enabledCloudwatchLogsExports;
    public DbInstanceList withEnabledCloudwatchLogsExports(String[] enabledCloudwatchLogsExports) {
        this.enabledCloudwatchLogsExports = enabledCloudwatchLogsExports;
        return this;
    }
    public Endpoint endpoint;
    public DbInstanceList withEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engine;
    public DbInstanceList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbInstanceList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbInstanceList withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public String kmsKeyId;
    public DbInstanceList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public OffsetDateTime latestRestorableTime;
    public DbInstanceList withLatestRestorableTime(OffsetDateTime latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    public PendingModifiedValues pendingModifiedValues;
    public DbInstanceList withPendingModifiedValues(PendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public String preferredBackupWindow;
    public DbInstanceList withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    public String preferredMaintenanceWindow;
    public DbInstanceList withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public Long promotionTier;
    public DbInstanceList withPromotionTier(Long promotionTier) {
        this.promotionTier = promotionTier;
        return this;
    }
    public Boolean publiclyAccessible;
    public DbInstanceList withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    public DbInstanceStatusInfoList[] statusInfos;
    public DbInstanceList withStatusInfos(DbInstanceStatusInfoList[] statusInfos) {
        this.statusInfos = statusInfos;
        return this;
    }
    public Boolean storageEncrypted;
    public DbInstanceList withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbInstanceList withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}