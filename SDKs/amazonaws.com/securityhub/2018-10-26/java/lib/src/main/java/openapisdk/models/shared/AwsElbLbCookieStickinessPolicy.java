package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLbCookieStickinessPolicy
 * Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>.
**/
public class AwsElbLbCookieStickinessPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CookieExpirationPeriod")
    public Long cookieExpirationPeriod;
    public AwsElbLbCookieStickinessPolicy withCookieExpirationPeriod(Long cookieExpirationPeriod) {
        this.cookieExpirationPeriod = cookieExpirationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public AwsElbLbCookieStickinessPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}