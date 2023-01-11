package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbAppCookieStickinessPolicy
 * Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>.
**/
public class AwsElbAppCookieStickinessPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CookieName")
    public String cookieName;
    public AwsElbAppCookieStickinessPolicy withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public AwsElbAppCookieStickinessPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}