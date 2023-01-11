package openapisdk.models.shared;



/**
 * CachePolicyQueryStringsConfig
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
public class CachePolicyQueryStringsConfig {
    public CachePolicyQueryStringBehaviorEnum queryStringBehavior;
    public CachePolicyQueryStringsConfig withQueryStringBehavior(CachePolicyQueryStringBehaviorEnum queryStringBehavior) {
        this.queryStringBehavior = queryStringBehavior;
        return this;
    }
    public QueryStringNames queryStrings;
    public CachePolicyQueryStringsConfig withQueryStrings(QueryStringNames queryStrings) {
        this.queryStrings = queryStrings;
        return this;
    }
}