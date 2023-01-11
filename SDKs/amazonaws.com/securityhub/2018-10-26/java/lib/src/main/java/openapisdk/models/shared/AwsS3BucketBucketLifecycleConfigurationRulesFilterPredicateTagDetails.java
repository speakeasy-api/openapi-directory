package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
 * A tag filter.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails withValue(String value) {
        this.value = value;
        return this;
    }
}