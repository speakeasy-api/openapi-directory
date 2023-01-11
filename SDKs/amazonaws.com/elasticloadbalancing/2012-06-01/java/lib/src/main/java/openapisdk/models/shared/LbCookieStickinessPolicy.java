package openapisdk.models.shared;



/**
 * LbCookieStickinessPolicy
 * Information about a policy for duration-based session stickiness.
**/
public class LbCookieStickinessPolicy {
    public Long cookieExpirationPeriod;
    public LbCookieStickinessPolicy withCookieExpirationPeriod(Long cookieExpirationPeriod) {
        this.cookieExpirationPeriod = cookieExpirationPeriod;
        return this;
    }
    public String policyName;
    public LbCookieStickinessPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}