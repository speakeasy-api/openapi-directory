package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbInstanceAutomatedBackupList
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
**/
public class DbInstanceAutomatedBackupList {
    public Long allocatedStorage;
    public DbInstanceAutomatedBackupList withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public String availabilityZone;
    public DbInstanceAutomatedBackupList withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbInstanceAutomatedBackupList withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String dbInstanceArn;
    public DbInstanceAutomatedBackupList withDbInstanceArn(String dbInstanceArn) {
        this.dbInstanceArn = dbInstanceArn;
        return this;
    }
    public String dbInstanceAutomatedBackupsArn;
    public DbInstanceAutomatedBackupList withDbInstanceAutomatedBackupsArn(String dbInstanceAutomatedBackupsArn) {
        this.dbInstanceAutomatedBackupsArn = dbInstanceAutomatedBackupsArn;
        return this;
    }
    public DbInstanceAutomatedBackupsReplicationList[] dbInstanceAutomatedBackupsReplications;
    public DbInstanceAutomatedBackupList withDbInstanceAutomatedBackupsReplications(DbInstanceAutomatedBackupsReplicationList[] dbInstanceAutomatedBackupsReplications) {
        this.dbInstanceAutomatedBackupsReplications = dbInstanceAutomatedBackupsReplications;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbInstanceAutomatedBackupList withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbiResourceId;
    public DbInstanceAutomatedBackupList withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    public Boolean encrypted;
    public DbInstanceAutomatedBackupList withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    public String engine;
    public DbInstanceAutomatedBackupList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbInstanceAutomatedBackupList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbInstanceAutomatedBackupList withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbInstanceAutomatedBackupList withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbInstanceAutomatedBackupList withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String kmsKeyId;
    public DbInstanceAutomatedBackupList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public String licenseModel;
    public DbInstanceAutomatedBackupList withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbInstanceAutomatedBackupList withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public String optionGroupName;
    public DbInstanceAutomatedBackupList withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    public Long port;
    public DbInstanceAutomatedBackupList withPort(Long port) {
        this.port = port;
        return this;
    }
    public String region;
    public DbInstanceAutomatedBackupList withRegion(String region) {
        this.region = region;
        return this;
    }
    public RestoreWindow restoreWindow;
    public DbInstanceAutomatedBackupList withRestoreWindow(RestoreWindow restoreWindow) {
        this.restoreWindow = restoreWindow;
        return this;
    }
    public String status;
    public DbInstanceAutomatedBackupList withStatus(String status) {
        this.status = status;
        return this;
    }
    public String storageType;
    public DbInstanceAutomatedBackupList withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    public String tdeCredentialArn;
    public DbInstanceAutomatedBackupList withTdeCredentialArn(String tdeCredentialArn) {
        this.tdeCredentialArn = tdeCredentialArn;
        return this;
    }
    public String timezone;
    public DbInstanceAutomatedBackupList withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    public String vpcId;
    public DbInstanceAutomatedBackupList withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}