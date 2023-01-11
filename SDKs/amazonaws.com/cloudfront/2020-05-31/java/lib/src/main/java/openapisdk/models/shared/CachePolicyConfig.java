package openapisdk.models.shared;



/**
 * CachePolicyConfig
 * <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find a valid object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
**/
public class CachePolicyConfig {
    public String comment;
    public CachePolicyConfig withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public Long defaultTTL;
    public CachePolicyConfig withDefaultTtl(Long defaultTTL) {
        this.defaultTTL = defaultTTL;
        return this;
    }
    public Long maxTTL;
    public CachePolicyConfig withMaxTtl(Long maxTTL) {
        this.maxTTL = maxTTL;
        return this;
    }
    public Long minTTL;
    public CachePolicyConfig withMinTtl(Long minTTL) {
        this.minTTL = minTTL;
        return this;
    }
    public String name;
    public CachePolicyConfig withName(String name) {
        this.name = name;
        return this;
    }
    public ParametersInCacheKeyAndForwardedToOrigin parametersInCacheKeyAndForwardedToOrigin;
    public CachePolicyConfig withParametersInCacheKeyAndForwardedToOrigin(ParametersInCacheKeyAndForwardedToOrigin parametersInCacheKeyAndForwardedToOrigin) {
        this.parametersInCacheKeyAndForwardedToOrigin = parametersInCacheKeyAndForwardedToOrigin;
        return this;
    }
}