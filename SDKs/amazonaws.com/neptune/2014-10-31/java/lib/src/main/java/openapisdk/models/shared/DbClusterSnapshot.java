package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbClusterSnapshot
 * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
**/
public class DbClusterSnapshot {
    public Long allocatedStorage;
    public DbClusterSnapshot withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public java.util.Map<String, Object>[] availabilityZones;
    public DbClusterSnapshot withAvailabilityZones(java.util.Map<String, Object>[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public OffsetDateTime clusterCreateTime;
    public DbClusterSnapshot withClusterCreateTime(OffsetDateTime clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterSnapshot withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String dbClusterSnapshotArn;
    public DbClusterSnapshot withDbClusterSnapshotArn(String dbClusterSnapshotArn) {
        this.dbClusterSnapshotArn = dbClusterSnapshotArn;
        return this;
    }
    public String dbClusterSnapshotIdentifier;
    public DbClusterSnapshot withDbClusterSnapshotIdentifier(String dbClusterSnapshotIdentifier) {
        this.dbClusterSnapshotIdentifier = dbClusterSnapshotIdentifier;
        return this;
    }
    public String engine;
    public DbClusterSnapshot withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbClusterSnapshot withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbClusterSnapshot withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public String kmsKeyId;
    public DbClusterSnapshot withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public String licenseModel;
    public DbClusterSnapshot withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbClusterSnapshot withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Long percentProgress;
    public DbClusterSnapshot withPercentProgress(Long percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public Long port;
    public DbClusterSnapshot withPort(Long port) {
        this.port = port;
        return this;
    }
    public OffsetDateTime snapshotCreateTime;
    public DbClusterSnapshot withSnapshotCreateTime(OffsetDateTime snapshotCreateTime) {
        this.snapshotCreateTime = snapshotCreateTime;
        return this;
    }
    public String snapshotType;
    public DbClusterSnapshot withSnapshotType(String snapshotType) {
        this.snapshotType = snapshotType;
        return this;
    }
    public String sourceDBClusterSnapshotArn;
    public DbClusterSnapshot withSourceDbClusterSnapshotArn(String sourceDBClusterSnapshotArn) {
        this.sourceDBClusterSnapshotArn = sourceDBClusterSnapshotArn;
        return this;
    }
    public String status;
    public DbClusterSnapshot withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean storageEncrypted;
    public DbClusterSnapshot withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    public String vpcId;
    public DbClusterSnapshot withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}