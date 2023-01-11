package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchingBucket
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
public class MatchingBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public MatchingBucket withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketName")
    public String bucketName;
    public MatchingBucket withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifiableObjectCount")
    public Long classifiableObjectCount;
    public MatchingBucket withClassifiableObjectCount(Long classifiableObjectCount) {
        this.classifiableObjectCount = classifiableObjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifiableSizeInBytes")
    public Long classifiableSizeInBytes;
    public MatchingBucket withClassifiableSizeInBytes(Long classifiableSizeInBytes) {
        this.classifiableSizeInBytes = classifiableSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDetails")
    public JobDetails jobDetails;
    public MatchingBucket withJobDetails(JobDetails jobDetails) {
        this.jobDetails = jobDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectCount")
    public Long objectCount;
    public MatchingBucket withObjectCount(Long objectCount) {
        this.objectCount = objectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectCountByEncryptionType")
    public ObjectCountByEncryptionType objectCountByEncryptionType;
    public MatchingBucket withObjectCountByEncryptionType(ObjectCountByEncryptionType objectCountByEncryptionType) {
        this.objectCountByEncryptionType = objectCountByEncryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInBytes")
    public Long sizeInBytes;
    public MatchingBucket withSizeInBytes(Long sizeInBytes) {
        this.sizeInBytes = sizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInBytesCompressed")
    public Long sizeInBytesCompressed;
    public MatchingBucket withSizeInBytesCompressed(Long sizeInBytesCompressed) {
        this.sizeInBytesCompressed = sizeInBytesCompressed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unclassifiableObjectCount")
    public ObjectLevelStatistics unclassifiableObjectCount;
    public MatchingBucket withUnclassifiableObjectCount(ObjectLevelStatistics unclassifiableObjectCount) {
        this.unclassifiableObjectCount = unclassifiableObjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unclassifiableObjectSizeInBytes")
    public ObjectLevelStatistics unclassifiableObjectSizeInBytes;
    public MatchingBucket withUnclassifiableObjectSizeInBytes(ObjectLevelStatistics unclassifiableObjectSizeInBytes) {
        this.unclassifiableObjectSizeInBytes = unclassifiableObjectSizeInBytes;
        return this;
    }
}