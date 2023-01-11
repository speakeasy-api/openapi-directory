package openapisdk.models.shared;



/**
 * Policies
 * The policies for a load balancer.
**/
public class Policies {
    public AppCookieStickinessPolicy[] appCookieStickinessPolicies;
    public Policies withAppCookieStickinessPolicies(AppCookieStickinessPolicy[] appCookieStickinessPolicies) {
        this.appCookieStickinessPolicies = appCookieStickinessPolicies;
        return this;
    }
    public LbCookieStickinessPolicy[] lbCookieStickinessPolicies;
    public Policies withLbCookieStickinessPolicies(LbCookieStickinessPolicy[] lbCookieStickinessPolicies) {
        this.lbCookieStickinessPolicies = lbCookieStickinessPolicies;
        return this;
    }
    public String[] otherPolicies;
    public Policies withOtherPolicies(String[] otherPolicies) {
        this.otherPolicies = otherPolicies;
        return this;
    }
}