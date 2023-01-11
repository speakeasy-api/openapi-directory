package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketBucketLifecycleConfigurationDetails
 * The lifecycle configuration for the objects in the S3 bucket.
**/
public class AwsS3BucketBucketLifecycleConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public AwsS3BucketBucketLifecycleConfigurationRulesDetails[] rules;
    public AwsS3BucketBucketLifecycleConfigurationDetails withRules(AwsS3BucketBucketLifecycleConfigurationRulesDetails[] rules) {
        this.rules = rules;
        return this;
    }
}