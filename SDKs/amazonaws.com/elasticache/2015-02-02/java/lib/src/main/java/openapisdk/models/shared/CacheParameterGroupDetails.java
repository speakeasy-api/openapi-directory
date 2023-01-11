package openapisdk.models.shared;



/**
 * CacheParameterGroupDetails
 * Represents the output of a <code>DescribeCacheParameters</code> operation.
**/
public class CacheParameterGroupDetails {
    public CacheNodeTypeSpecificParametersList[] cacheNodeTypeSpecificParameters;
    public CacheParameterGroupDetails withCacheNodeTypeSpecificParameters(CacheNodeTypeSpecificParametersList[] cacheNodeTypeSpecificParameters) {
        this.cacheNodeTypeSpecificParameters = cacheNodeTypeSpecificParameters;
        return this;
    }
    public String marker;
    public CacheParameterGroupDetails withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParametersList[] parameters;
    public CacheParameterGroupDetails withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
}