package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
 * Identifies the objects that a rule applies to.
**/
public class AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predicate")
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails predicate;
    public AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails withPredicate(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails predicate) {
        this.predicate = predicate;
        return this;
    }
}