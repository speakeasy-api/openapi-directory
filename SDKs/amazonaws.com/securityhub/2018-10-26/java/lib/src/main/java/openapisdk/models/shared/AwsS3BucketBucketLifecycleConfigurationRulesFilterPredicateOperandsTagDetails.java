package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
 * A tag that is assigned to matching objects.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails withValue(String value) {
        this.value = value;
        return this;
    }
}