package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
 * A value to use for the filter.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tag")
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails tag;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails withTag(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails withType(String type) {
        this.type = type;
        return this;
    }
}