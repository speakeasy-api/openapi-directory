package openapisdk.models.shared;



/**
 * OriginRequestPolicyHeadersConfig
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
**/
public class OriginRequestPolicyHeadersConfig {
    public OriginRequestPolicyHeaderBehaviorEnum headerBehavior;
    public OriginRequestPolicyHeadersConfig withHeaderBehavior(OriginRequestPolicyHeaderBehaviorEnum headerBehavior) {
        this.headerBehavior = headerBehavior;
        return this;
    }
    public Headers headers;
    public OriginRequestPolicyHeadersConfig withHeaders(Headers headers) {
        this.headers = headers;
        return this;
    }
}