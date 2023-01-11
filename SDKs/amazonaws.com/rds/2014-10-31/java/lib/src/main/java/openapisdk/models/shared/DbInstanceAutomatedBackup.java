package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbInstanceAutomatedBackup
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
**/
public class DbInstanceAutomatedBackup {
    public Long allocatedStorage;
    public DbInstanceAutomatedBackup withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public String availabilityZone;
    public DbInstanceAutomatedBackup withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbInstanceAutomatedBackup withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String dbInstanceArn;
    public DbInstanceAutomatedBackup withDbInstanceArn(String dbInstanceArn) {
        this.dbInstanceArn = dbInstanceArn;
        return this;
    }
    public String dbInstanceAutomatedBackupsArn;
    public DbInstanceAutomatedBackup withDbInstanceAutomatedBackupsArn(String dbInstanceAutomatedBackupsArn) {
        this.dbInstanceAutomatedBackupsArn = dbInstanceAutomatedBackupsArn;
        return this;
    }
    public DbInstanceAutomatedBackupsReplicationList[] dbInstanceAutomatedBackupsReplications;
    public DbInstanceAutomatedBackup withDbInstanceAutomatedBackupsReplications(DbInstanceAutomatedBackupsReplicationList[] dbInstanceAutomatedBackupsReplications) {
        this.dbInstanceAutomatedBackupsReplications = dbInstanceAutomatedBackupsReplications;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbInstanceAutomatedBackup withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbiResourceId;
    public DbInstanceAutomatedBackup withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    public Boolean encrypted;
    public DbInstanceAutomatedBackup withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    public String engine;
    public DbInstanceAutomatedBackup withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbInstanceAutomatedBackup withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbInstanceAutomatedBackup withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbInstanceAutomatedBackup withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbInstanceAutomatedBackup withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String kmsKeyId;
    public DbInstanceAutomatedBackup withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public String licenseModel;
    public DbInstanceAutomatedBackup withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbInstanceAutomatedBackup withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public String optionGroupName;
    public DbInstanceAutomatedBackup withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    public Long port;
    public DbInstanceAutomatedBackup withPort(Long port) {
        this.port = port;
        return this;
    }
    public String region;
    public DbInstanceAutomatedBackup withRegion(String region) {
        this.region = region;
        return this;
    }
    public RestoreWindow restoreWindow;
    public DbInstanceAutomatedBackup withRestoreWindow(RestoreWindow restoreWindow) {
        this.restoreWindow = restoreWindow;
        return this;
    }
    public String status;
    public DbInstanceAutomatedBackup withStatus(String status) {
        this.status = status;
        return this;
    }
    public String storageType;
    public DbInstanceAutomatedBackup withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    public String tdeCredentialArn;
    public DbInstanceAutomatedBackup withTdeCredentialArn(String tdeCredentialArn) {
        this.tdeCredentialArn = tdeCredentialArn;
        return this;
    }
    public String timezone;
    public DbInstanceAutomatedBackup withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    public String vpcId;
    public DbInstanceAutomatedBackup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}