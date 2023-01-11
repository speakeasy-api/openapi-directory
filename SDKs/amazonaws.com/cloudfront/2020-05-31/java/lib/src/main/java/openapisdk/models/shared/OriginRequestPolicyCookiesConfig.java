package openapisdk.models.shared;



/**
 * OriginRequestPolicyCookiesConfig
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
**/
public class OriginRequestPolicyCookiesConfig {
    public OriginRequestPolicyCookieBehaviorEnum cookieBehavior;
    public OriginRequestPolicyCookiesConfig withCookieBehavior(OriginRequestPolicyCookieBehaviorEnum cookieBehavior) {
        this.cookieBehavior = cookieBehavior;
        return this;
    }
    public CookieNames cookies;
    public OriginRequestPolicyCookiesConfig withCookies(CookieNames cookies) {
        this.cookies = cookies;
        return this;
    }
}