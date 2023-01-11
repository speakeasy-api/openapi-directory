package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerPolicies
 * Contains information about the policies for a load balancer.
**/
public class AwsElbLoadBalancerPolicies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppCookieStickinessPolicies")
    public AwsElbAppCookieStickinessPolicy[] appCookieStickinessPolicies;
    public AwsElbLoadBalancerPolicies withAppCookieStickinessPolicies(AwsElbAppCookieStickinessPolicy[] appCookieStickinessPolicies) {
        this.appCookieStickinessPolicies = appCookieStickinessPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LbCookieStickinessPolicies")
    public AwsElbLbCookieStickinessPolicy[] lbCookieStickinessPolicies;
    public AwsElbLoadBalancerPolicies withLbCookieStickinessPolicies(AwsElbLbCookieStickinessPolicy[] lbCookieStickinessPolicies) {
        this.lbCookieStickinessPolicies = lbCookieStickinessPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OtherPolicies")
    public String[] otherPolicies;
    public AwsElbLoadBalancerPolicies withOtherPolicies(String[] otherPolicies) {
        this.otherPolicies = otherPolicies;
        return this;
    }
}