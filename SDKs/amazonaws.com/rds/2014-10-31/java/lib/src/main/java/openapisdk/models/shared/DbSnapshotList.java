package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbSnapshotList
 * <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
**/
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
    public String dbSnapshotArn;
    public DbSnapshotList withDbSnapshotArn(String dbSnapshotArn) {
        this.dbSnapshotArn = dbSnapshotArn;
        return this;
    }
    public String dbSnapshotIdentifier;
    public DbSnapshotList withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    public String dbiResourceId;
    public DbSnapshotList withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    public Boolean encrypted;
    public DbSnapshotList withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
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
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbSnapshotList withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
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
    public String kmsKeyId;
    public DbSnapshotList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
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
    public String optionGroupName;
    public DbSnapshotList withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    public OffsetDateTime originalSnapshotCreateTime;
    public DbSnapshotList withOriginalSnapshotCreateTime(OffsetDateTime originalSnapshotCreateTime) {
        this.originalSnapshotCreateTime = originalSnapshotCreateTime;
        return this;
    }
    public Long percentProgress;
    public DbSnapshotList withPercentProgress(Long percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public Long port;
    public DbSnapshotList withPort(Long port) {
        this.port = port;
        return this;
    }
    public ProcessorFeatureList[] processorFeatures;
    public DbSnapshotList withProcessorFeatures(ProcessorFeatureList[] processorFeatures) {
        this.processorFeatures = processorFeatures;
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
    public String sourceDBSnapshotIdentifier;
    public DbSnapshotList withSourceDbSnapshotIdentifier(String sourceDBSnapshotIdentifier) {
        this.sourceDBSnapshotIdentifier = sourceDBSnapshotIdentifier;
        return this;
    }
    public String sourceRegion;
    public DbSnapshotList withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
    public String status;
    public DbSnapshotList withStatus(String status) {
        this.status = status;
        return this;
    }
    public String storageType;
    public DbSnapshotList withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    public TagList[] tagList;
    public DbSnapshotList withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
    public String tdeCredentialArn;
    public DbSnapshotList withTdeCredentialArn(String tdeCredentialArn) {
        this.tdeCredentialArn = tdeCredentialArn;
        return this;
    }
    public String timezone;
    public DbSnapshotList withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    public String vpcId;
    public DbSnapshotList withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}