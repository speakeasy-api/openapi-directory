package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BucketMetadata
 * Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
public class BucketMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public BucketMetadata withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsUnencryptedObjectUploads")
    public AllowsUnencryptedObjectUploadsEnum allowsUnencryptedObjectUploads;
    public BucketMetadata withAllowsUnencryptedObjectUploads(AllowsUnencryptedObjectUploadsEnum allowsUnencryptedObjectUploads) {
        this.allowsUnencryptedObjectUploads = allowsUnencryptedObjectUploads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketArn")
    public String bucketArn;
    public BucketMetadata withBucketArn(String bucketArn) {
        this.bucketArn = bucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("bucketCreatedAt")
    public OffsetDateTime bucketCreatedAt;
    public BucketMetadata withBucketCreatedAt(OffsetDateTime bucketCreatedAt) {
        this.bucketCreatedAt = bucketCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketName")
    public String bucketName;
    public BucketMetadata withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifiableObjectCount")
    public Long classifiableObjectCount;
    public BucketMetadata withClassifiableObjectCount(Long classifiableObjectCount) {
        this.classifiableObjectCount = classifiableObjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifiableSizeInBytes")
    public Long classifiableSizeInBytes;
    public BucketMetadata withClassifiableSizeInBytes(Long classifiableSizeInBytes) {
        this.classifiableSizeInBytes = classifiableSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDetails")
    public JobDetails jobDetails;
    public BucketMetadata withJobDetails(JobDetails jobDetails) {
        this.jobDetails = jobDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public BucketMetadata withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectCount")
    public Long objectCount;
    public BucketMetadata withObjectCount(Long objectCount) {
        this.objectCount = objectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectCountByEncryptionType")
    public ObjectCountByEncryptionType objectCountByEncryptionType;
    public BucketMetadata withObjectCountByEncryptionType(ObjectCountByEncryptionType objectCountByEncryptionType) {
        this.objectCountByEncryptionType = objectCountByEncryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAccess")
    public BucketPublicAccess publicAccess;
    public BucketMetadata withPublicAccess(BucketPublicAccess publicAccess) {
        this.publicAccess = publicAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public BucketMetadata withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationDetails")
    public ReplicationDetails replicationDetails;
    public BucketMetadata withReplicationDetails(ReplicationDetails replicationDetails) {
        this.replicationDetails = replicationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverSideEncryption")
    public BucketServerSideEncryption serverSideEncryption;
    public BucketMetadata withServerSideEncryption(BucketServerSideEncryption serverSideEncryption) {
        this.serverSideEncryption = serverSideEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedAccess")
    public SharedAccessEnum sharedAccess;
    public BucketMetadata withSharedAccess(SharedAccessEnum sharedAccess) {
        this.sharedAccess = sharedAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInBytes")
    public Long sizeInBytes;
    public BucketMetadata withSizeInBytes(Long sizeInBytes) {
        this.sizeInBytes = sizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInBytesCompressed")
    public Long sizeInBytesCompressed;
    public BucketMetadata withSizeInBytesCompressed(Long sizeInBytesCompressed) {
        this.sizeInBytesCompressed = sizeInBytesCompressed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public KeyValuePair[] tags;
    public BucketMetadata withTags(KeyValuePair[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unclassifiableObjectCount")
    public ObjectLevelStatistics unclassifiableObjectCount;
    public BucketMetadata withUnclassifiableObjectCount(ObjectLevelStatistics unclassifiableObjectCount) {
        this.unclassifiableObjectCount = unclassifiableObjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unclassifiableObjectSizeInBytes")
    public ObjectLevelStatistics unclassifiableObjectSizeInBytes;
    public BucketMetadata withUnclassifiableObjectSizeInBytes(ObjectLevelStatistics unclassifiableObjectSizeInBytes) {
        this.unclassifiableObjectSizeInBytes = unclassifiableObjectSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioning")
    public Boolean versioning;
    public BucketMetadata withVersioning(Boolean versioning) {
        this.versioning = versioning;
        return this;
    }
}