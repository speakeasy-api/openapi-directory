package openapisdk.models.shared;



/**
 * CacheParameterGroupsMessage
 * Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
**/
public class CacheParameterGroupsMessage {
    public CacheParameterGroupList[] cacheParameterGroups;
    public CacheParameterGroupsMessage withCacheParameterGroups(CacheParameterGroupList[] cacheParameterGroups) {
        this.cacheParameterGroups = cacheParameterGroups;
        return this;
    }
    public String marker;
    public CacheParameterGroupsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}