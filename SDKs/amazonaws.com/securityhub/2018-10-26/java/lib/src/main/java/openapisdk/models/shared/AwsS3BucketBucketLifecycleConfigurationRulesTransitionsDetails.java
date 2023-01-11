package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
 * A rule for when objects transition to specific storage classes.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Date")
    public String date;
    public AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Days")
    public Long days;
    public AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails withDays(Long days) {
        this.days = days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageClass")
    public String storageClass;
    public AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
}