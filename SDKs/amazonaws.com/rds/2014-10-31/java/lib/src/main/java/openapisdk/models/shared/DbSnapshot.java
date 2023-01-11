package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbSnapshot
 * <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
**/
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
    public String dbSnapshotArn;
    public DbSnapshot withDbSnapshotArn(String dbSnapshotArn) {
        this.dbSnapshotArn = dbSnapshotArn;
        return this;
    }
    public String dbSnapshotIdentifier;
    public DbSnapshot withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    public String dbiResourceId;
    public DbSnapshot withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    public Boolean encrypted;
    public DbSnapshot withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
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
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbSnapshot withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
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
    public String kmsKeyId;
    public DbSnapshot withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
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
    public OffsetDateTime originalSnapshotCreateTime;
    public DbSnapshot withOriginalSnapshotCreateTime(OffsetDateTime originalSnapshotCreateTime) {
        this.originalSnapshotCreateTime = originalSnapshotCreateTime;
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
    public ProcessorFeatureList[] processorFeatures;
    public DbSnapshot withProcessorFeatures(ProcessorFeatureList[] processorFeatures) {
        this.processorFeatures = processorFeatures;
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
    public String sourceDBSnapshotIdentifier;
    public DbSnapshot withSourceDbSnapshotIdentifier(String sourceDBSnapshotIdentifier) {
        this.sourceDBSnapshotIdentifier = sourceDBSnapshotIdentifier;
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
    public String storageType;
    public DbSnapshot withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    public TagList[] tagList;
    public DbSnapshot withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
    public String tdeCredentialArn;
    public DbSnapshot withTdeCredentialArn(String tdeCredentialArn) {
        this.tdeCredentialArn = tdeCredentialArn;
        return this;
    }
    public String timezone;
    public DbSnapshot withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    public String vpcId;
    public DbSnapshot withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}