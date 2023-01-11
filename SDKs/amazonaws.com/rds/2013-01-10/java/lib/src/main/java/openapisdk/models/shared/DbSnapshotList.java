package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class DbSnapshotList {
    public Long allocatedStorage;
    public DbSnapshotList withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public String availabilityZone;
    public DbSnapshotList withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbSnapshotList withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbSnapshotIdentifier;
    public DbSnapshotList withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    public String engine;
    public DbSnapshotList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbSnapshotList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbSnapshotList withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbSnapshotList withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String licenseModel;
    public DbSnapshotList withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbSnapshotList withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Long port;
    public DbSnapshotList withPort(Long port) {
        this.port = port;
        return this;
    }
    public OffsetDateTime snapshotCreateTime;
    public DbSnapshotList withSnapshotCreateTime(OffsetDateTime snapshotCreateTime) {
        this.snapshotCreateTime = snapshotCreateTime;
        return this;
    }
    public String snapshotType;
    public DbSnapshotList withSnapshotType(String snapshotType) {
        this.snapshotType = snapshotType;
        return this;
    }
    public String status;
    public DbSnapshotList withStatus(String status) {
        this.status = status;
        return this;
    }
    public String vpcId;
    public DbSnapshotList withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}