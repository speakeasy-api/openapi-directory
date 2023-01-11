package openapisdk.models.shared;



/**
 * CachePolicyHeadersConfig
 * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
public class CachePolicyHeadersConfig {
    public CachePolicyHeaderBehaviorEnum headerBehavior;
    public CachePolicyHeadersConfig withHeaderBehavior(CachePolicyHeaderBehaviorEnum headerBehavior) {
        this.headerBehavior = headerBehavior;
        return this;
    }
    public Headers headers;
    public CachePolicyHeadersConfig withHeaders(Headers headers) {
        this.headers = headers;
        return this;
    }
}