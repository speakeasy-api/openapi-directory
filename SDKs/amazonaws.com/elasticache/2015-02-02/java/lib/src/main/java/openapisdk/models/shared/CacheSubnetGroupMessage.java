package openapisdk.models.shared;



/**
 * CacheSubnetGroupMessage
 * Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
**/
public class CacheSubnetGroupMessage {
    public CacheSubnetGroups[] cacheSubnetGroups;
    public CacheSubnetGroupMessage withCacheSubnetGroups(CacheSubnetGroups[] cacheSubnetGroups) {
        this.cacheSubnetGroups = cacheSubnetGroups;
        return this;
    }
    public String marker;
    public CacheSubnetGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}