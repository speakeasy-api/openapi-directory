package openapisdk.models.shared;



/**
 * CacheSecurityGroupMessage
 * Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
**/
public class CacheSecurityGroupMessage {
    public CacheSecurityGroups[] cacheSecurityGroups;
    public CacheSecurityGroupMessage withCacheSecurityGroups(CacheSecurityGroups[] cacheSecurityGroups) {
        this.cacheSecurityGroups = cacheSecurityGroups;
        return this;
    }
    public String marker;
    public CacheSecurityGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}