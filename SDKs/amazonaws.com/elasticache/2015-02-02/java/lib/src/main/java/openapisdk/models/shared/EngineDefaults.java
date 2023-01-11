package openapisdk.models.shared;



/**
 * EngineDefaults
 * Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
**/
public class EngineDefaults {
    public CacheNodeTypeSpecificParametersList[] cacheNodeTypeSpecificParameters;
    public EngineDefaults withCacheNodeTypeSpecificParameters(CacheNodeTypeSpecificParametersList[] cacheNodeTypeSpecificParameters) {
        this.cacheNodeTypeSpecificParameters = cacheNodeTypeSpecificParameters;
        return this;
    }
    public String cacheParameterGroupFamily;
    public EngineDefaults withCacheParameterGroupFamily(String cacheParameterGroupFamily) {
        this.cacheParameterGroupFamily = cacheParameterGroupFamily;
        return this;
    }
    public String marker;
    public EngineDefaults withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParametersList[] parameters;
    public EngineDefaults withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
}