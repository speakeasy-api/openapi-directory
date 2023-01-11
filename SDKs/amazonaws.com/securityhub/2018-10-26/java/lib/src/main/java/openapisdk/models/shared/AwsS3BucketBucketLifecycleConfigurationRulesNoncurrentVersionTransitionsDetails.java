package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
 * A transition rule that describes when noncurrent objects transition to a specified storage class.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Days")
    public Long days;
    public AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails withDays(Long days) {
        this.days = days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageClass")
    public String storageClass;
    public AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
}