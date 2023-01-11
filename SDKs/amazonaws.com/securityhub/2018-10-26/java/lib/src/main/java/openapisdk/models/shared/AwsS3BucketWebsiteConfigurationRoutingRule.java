package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketWebsiteConfigurationRoutingRule
 * A rule for redirecting requests to the website.
**/
public class AwsS3BucketWebsiteConfigurationRoutingRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Condition")
    public AwsS3BucketWebsiteConfigurationRoutingRuleCondition condition;
    public AwsS3BucketWebsiteConfigurationRoutingRule withCondition(AwsS3BucketWebsiteConfigurationRoutingRuleCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Redirect")
    public AwsS3BucketWebsiteConfigurationRoutingRuleRedirect redirect;
    public AwsS3BucketWebsiteConfigurationRoutingRule withRedirect(AwsS3BucketWebsiteConfigurationRoutingRuleRedirect redirect) {
        this.redirect = redirect;
        return this;
    }
}