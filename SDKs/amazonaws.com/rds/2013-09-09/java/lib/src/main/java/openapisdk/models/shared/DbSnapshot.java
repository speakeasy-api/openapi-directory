package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class DbSnapshot {
    public Long allocatedStorage;
    public DbSnapshot withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public String availabilityZone;
    public DbSnapshot withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbSnapshot withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbSnapshotIdentifier;
    public DbSnapshot withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    public String engine;
    public DbSnapshot withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbSnapshot withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbSnapshot withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbSnapshot withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String licenseModel;
    public DbSnapshot withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbSnapshot withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public String optionGroupName;
    public DbSnapshot withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    public Long percentProgress;
    public DbSnapshot withPercentProgress(Long percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public Long port;
    public DbSnapshot withPort(Long port) {
        this.port = port;
        return this;
    }
    public OffsetDateTime snapshotCreateTime;
    public DbSnapshot withSnapshotCreateTime(OffsetDateTime snapshotCreateTime) {
        this.snapshotCreateTime = snapshotCreateTime;
        return this;
    }
    public String snapshotType;
    public DbSnapshot withSnapshotType(String snapshotType) {
        this.snapshotType = snapshotType;
        return this;
    }
    public String sourceRegion;
    public DbSnapshot withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
    public String status;
    public DbSnapshot withStatus(String status) {
        this.status = status;
        return this;
    }
    public String vpcId;
    public DbSnapshot withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}