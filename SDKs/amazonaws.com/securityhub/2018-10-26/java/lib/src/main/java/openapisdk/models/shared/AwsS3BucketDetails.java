package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketDetails
 * The details of an Amazon S3 bucket.
**/
public class AwsS3BucketDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessControlList")
    public String accessControlList;
    public AwsS3BucketDetails withAccessControlList(String accessControlList) {
        this.accessControlList = accessControlList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketLifecycleConfiguration")
    public AwsS3BucketBucketLifecycleConfigurationDetails bucketLifecycleConfiguration;
    public AwsS3BucketDetails withBucketLifecycleConfiguration(AwsS3BucketBucketLifecycleConfigurationDetails bucketLifecycleConfiguration) {
        this.bucketLifecycleConfiguration = bucketLifecycleConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketLoggingConfiguration")
    public AwsS3BucketLoggingConfiguration bucketLoggingConfiguration;
    public AwsS3BucketDetails withBucketLoggingConfiguration(AwsS3BucketLoggingConfiguration bucketLoggingConfiguration) {
        this.bucketLoggingConfiguration = bucketLoggingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketNotificationConfiguration")
    public AwsS3BucketNotificationConfiguration bucketNotificationConfiguration;
    public AwsS3BucketDetails withBucketNotificationConfiguration(AwsS3BucketNotificationConfiguration bucketNotificationConfiguration) {
        this.bucketNotificationConfiguration = bucketNotificationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketWebsiteConfiguration")
    public AwsS3BucketWebsiteConfiguration bucketWebsiteConfiguration;
    public AwsS3BucketDetails withBucketWebsiteConfiguration(AwsS3BucketWebsiteConfiguration bucketWebsiteConfiguration) {
        this.bucketWebsiteConfiguration = bucketWebsiteConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedAt")
    public String createdAt;
    public AwsS3BucketDetails withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerId")
    public String ownerId;
    public AwsS3BucketDetails withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerName")
    public String ownerName;
    public AwsS3BucketDetails withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicAccessBlockConfiguration")
    public AwsS3AccountPublicAccessBlockDetails publicAccessBlockConfiguration;
    public AwsS3BucketDetails withPublicAccessBlockConfiguration(AwsS3AccountPublicAccessBlockDetails publicAccessBlockConfiguration) {
        this.publicAccessBlockConfiguration = publicAccessBlockConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerSideEncryptionConfiguration")
    public AwsS3BucketServerSideEncryptionConfiguration serverSideEncryptionConfiguration;
    public AwsS3BucketDetails withServerSideEncryptionConfiguration(AwsS3BucketServerSideEncryptionConfiguration serverSideEncryptionConfiguration) {
        this.serverSideEncryptionConfiguration = serverSideEncryptionConfiguration;
        return this;
    }
}