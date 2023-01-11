package openapisdk.models.shared;



public class PendingModifiedValues {
    public Long allocatedStorage;
    public PendingModifiedValues withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public Long backupRetentionPeriod;
    public PendingModifiedValues withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String dbInstanceClass;
    public PendingModifiedValues withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public String dbInstanceIdentifier;
    public PendingModifiedValues withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String engineVersion;
    public PendingModifiedValues withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Long iops;
    public PendingModifiedValues withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String masterUserPassword;
    public PendingModifiedValues withMasterUserPassword(String masterUserPassword) {
        this.masterUserPassword = masterUserPassword;
        return this;
    }
    public Boolean multiAZ;
    public PendingModifiedValues withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public Long port;
    public PendingModifiedValues withPort(Long port) {
        this.port = port;
        return this;
    }
    public String storageType;
    public PendingModifiedValues withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
}