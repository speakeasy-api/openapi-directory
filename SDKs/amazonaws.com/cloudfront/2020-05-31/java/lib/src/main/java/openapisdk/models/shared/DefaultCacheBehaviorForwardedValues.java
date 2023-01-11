package openapisdk.models.shared;



/**
 * DefaultCacheBehaviorForwardedValues
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
**/
public class DefaultCacheBehaviorForwardedValues {
    public CookiePreference cookies;
    public DefaultCacheBehaviorForwardedValues withCookies(CookiePreference cookies) {
        this.cookies = cookies;
        return this;
    }
    public Headers headers;
    public DefaultCacheBehaviorForwardedValues withHeaders(Headers headers) {
        this.headers = headers;
        return this;
    }
    public Boolean queryString;
    public DefaultCacheBehaviorForwardedValues withQueryString(Boolean queryString) {
        this.queryString = queryString;
        return this;
    }
    public QueryStringCacheKeys queryStringCacheKeys;
    public DefaultCacheBehaviorForwardedValues withQueryStringCacheKeys(QueryStringCacheKeys queryStringCacheKeys) {
        this.queryStringCacheKeys = queryStringCacheKeys;
        return this;
    }
}