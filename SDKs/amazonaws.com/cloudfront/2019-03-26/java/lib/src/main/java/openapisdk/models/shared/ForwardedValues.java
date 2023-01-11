package openapisdk.models.shared;



/**
 * ForwardedValues
 * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
**/
public class ForwardedValues {
    public CookiePreference cookies;
    public ForwardedValues withCookies(CookiePreference cookies) {
        this.cookies = cookies;
        return this;
    }
    public Headers headers;
    public ForwardedValues withHeaders(Headers headers) {
        this.headers = headers;
        return this;
    }
    public Boolean queryString;
    public ForwardedValues withQueryString(Boolean queryString) {
        this.queryString = queryString;
        return this;
    }
    public QueryStringCacheKeys queryStringCacheKeys;
    public ForwardedValues withQueryStringCacheKeys(QueryStringCacheKeys queryStringCacheKeys) {
        this.queryStringCacheKeys = queryStringCacheKeys;
        return this;
    }
}