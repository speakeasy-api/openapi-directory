package openapisdk.models.shared;



/**
 * AppCookieStickinessPolicy
 * Information about a policy for application-controlled session stickiness.
**/
public class AppCookieStickinessPolicy {
    public String cookieName;
    public AppCookieStickinessPolicy withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    public String policyName;
    public AppCookieStickinessPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}