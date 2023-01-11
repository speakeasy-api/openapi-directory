package openapisdk.models.shared;



/**
 * ParametersInCacheKeyAndForwardedToOrigin
 * <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find an object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
**/
public class ParametersInCacheKeyAndForwardedToOrigin {
    public CachePolicyCookiesConfig cookiesConfig;
    public ParametersInCacheKeyAndForwardedToOrigin withCookiesConfig(CachePolicyCookiesConfig cookiesConfig) {
        this.cookiesConfig = cookiesConfig;
        return this;
    }
    public Boolean enableAcceptEncodingBrotli;
    public ParametersInCacheKeyAndForwardedToOrigin withEnableAcceptEncodingBrotli(Boolean enableAcceptEncodingBrotli) {
        this.enableAcceptEncodingBrotli = enableAcceptEncodingBrotli;
        return this;
    }
    public Boolean enableAcceptEncodingGzip;
    public ParametersInCacheKeyAndForwardedToOrigin withEnableAcceptEncodingGzip(Boolean enableAcceptEncodingGzip) {
        this.enableAcceptEncodingGzip = enableAcceptEncodingGzip;
        return this;
    }
    public CachePolicyHeadersConfig headersConfig;
    public ParametersInCacheKeyAndForwardedToOrigin withHeadersConfig(CachePolicyHeadersConfig headersConfig) {
        this.headersConfig = headersConfig;
        return this;
    }
    public CachePolicyQueryStringsConfig queryStringsConfig;
    public ParametersInCacheKeyAndForwardedToOrigin withQueryStringsConfig(CachePolicyQueryStringsConfig queryStringsConfig) {
        this.queryStringsConfig = queryStringsConfig;
        return this;
    }
}