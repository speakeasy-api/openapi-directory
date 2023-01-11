package openapisdk.models.shared;



/**
 * CacheEngineVersionMessage
 * Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
**/
public class CacheEngineVersionMessage {
    public CacheEngineVersionList[] cacheEngineVersions;
    public CacheEngineVersionMessage withCacheEngineVersions(CacheEngineVersionList[] cacheEngineVersions) {
        this.cacheEngineVersions = cacheEngineVersions;
        return this;
    }
    public String marker;
    public CacheEngineVersionMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}