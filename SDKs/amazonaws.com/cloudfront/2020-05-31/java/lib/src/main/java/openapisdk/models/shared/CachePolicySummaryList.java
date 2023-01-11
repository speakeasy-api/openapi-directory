package openapisdk.models.shared;



/**
 * CachePolicySummaryList
 * Contains a cache policy.
**/
public class CachePolicySummaryList {
    public CachePolicy cachePolicy;
    public CachePolicySummaryList withCachePolicy(CachePolicy cachePolicy) {
        this.cachePolicy = cachePolicy;
        return this;
    }
    public CachePolicyTypeEnum type;
    public CachePolicySummaryList withType(CachePolicyTypeEnum type) {
        this.type = type;
        return this;
    }
}