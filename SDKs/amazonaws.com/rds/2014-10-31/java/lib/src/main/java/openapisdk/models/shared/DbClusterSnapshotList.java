package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbClusterSnapshotList
 * <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
**/
public class DbClusterSnapshotList {
    public Long allocatedStorage;
    public DbClusterSnapshotList withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public java.util.Map<String, Object>[] availabilityZones;
    public DbClusterSnapshotList withAvailabilityZones(java.util.Map<String, Object>[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public OffsetDateTime clusterCreateTime;
    public DbClusterSnapshotList withClusterCreateTime(OffsetDateTime clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterSnapshotList withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String dbClusterSnapshotArn;
    public DbClusterSnapshotList withDbClusterSnapshotArn(String dbClusterSnapshotArn) {
        this.dbClusterSnapshotArn = dbClusterSnapshotArn;
        return this;
    }
    public String dbClusterSnapshotIdentifier;
    public DbClusterSnapshotList withDbClusterSnapshotIdentifier(String dbClusterSnapshotIdentifier) {
        this.dbClusterSnapshotIdentifier = dbClusterSnapshotIdentifier;
        return this;
    }
    public String engine;
    public DbClusterSnapshotList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineMode;
    public DbClusterSnapshotList withEngineMode(String engineMode) {
        this.engineMode = engineMode;
        return this;
    }
    public String engineVersion;
    public DbClusterSnapshotList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbClusterSnapshotList withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public String kmsKeyId;
    public DbClusterSnapshotList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public String licenseModel;
    public DbClusterSnapshotList withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbClusterSnapshotList withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Long percentProgress;
    public DbClusterSnapshotList withPercentProgress(Long percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public Long port;
    public DbClusterSnapshotList withPort(Long port) {
        this.port = port;
        return this;
    }
    public OffsetDateTime snapshotCreateTime;
    public DbClusterSnapshotList withSnapshotCreateTime(OffsetDateTime snapshotCreateTime) {
        this.snapshotCreateTime = snapshotCreateTime;
        return this;
    }
    public String snapshotType;
    public DbClusterSnapshotList withSnapshotType(String snapshotType) {
        this.snapshotType = snapshotType;
        return this;
    }
    public String sourceDBClusterSnapshotArn;
    public DbClusterSnapshotList withSourceDbClusterSnapshotArn(String sourceDBClusterSnapshotArn) {
        this.sourceDBClusterSnapshotArn = sourceDBClusterSnapshotArn;
        return this;
    }
    public String status;
    public DbClusterSnapshotList withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean storageEncrypted;
    public DbClusterSnapshotList withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    public TagList[] tagList;
    public DbClusterSnapshotList withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
    public String vpcId;
    public DbClusterSnapshotList withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}