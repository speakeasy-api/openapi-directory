package openapisdk.models.shared;



/**
 * CachePolicyCookiesConfig
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
public class CachePolicyCookiesConfig {
    public CachePolicyCookieBehaviorEnum cookieBehavior;
    public CachePolicyCookiesConfig withCookieBehavior(CachePolicyCookieBehaviorEnum cookieBehavior) {
        this.cookieBehavior = cookieBehavior;
        return this;
    }
    public CookieNames cookies;
    public CachePolicyCookiesConfig withCookies(CookieNames cookies) {
        this.cookies = cookies;
        return this;
    }
}