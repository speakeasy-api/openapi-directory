package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
 * The configuration for the filter.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operands")
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[] operands;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails withOperands(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[] operands) {
        this.operands = operands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tag")
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails tag;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails withTag(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails withType(String type) {
        this.type = type;
        return this;
    }
}