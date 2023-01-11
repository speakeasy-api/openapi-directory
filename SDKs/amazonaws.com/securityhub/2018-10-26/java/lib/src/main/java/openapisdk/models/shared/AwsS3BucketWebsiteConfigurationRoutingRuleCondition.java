package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketWebsiteConfigurationRoutingRuleCondition
 * The condition that must be met in order to apply the routing rule.
**/
public class AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpErrorCodeReturnedEquals")
    public String httpErrorCodeReturnedEquals;
    public AwsS3BucketWebsiteConfigurationRoutingRuleCondition withHttpErrorCodeReturnedEquals(String httpErrorCodeReturnedEquals) {
        this.httpErrorCodeReturnedEquals = httpErrorCodeReturnedEquals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyPrefixEquals")
    public String keyPrefixEquals;
    public AwsS3BucketWebsiteConfigurationRoutingRuleCondition withKeyPrefixEquals(String keyPrefixEquals) {
        this.keyPrefixEquals = keyPrefixEquals;
        return this;
    }
}