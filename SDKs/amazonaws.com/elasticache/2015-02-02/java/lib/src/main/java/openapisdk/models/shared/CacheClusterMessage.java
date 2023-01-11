package openapisdk.models.shared;



/**
 * CacheClusterMessage
 * Represents the output of a <code>DescribeCacheClusters</code> operation.
**/
public class CacheClusterMessage {
    public CacheClusterList[] cacheClusters;
    public CacheClusterMessage withCacheClusters(CacheClusterList[] cacheClusters) {
        this.cacheClusters = cacheClusters;
        return this;
    }
    public String marker;
    public CacheClusterMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}