package openapisdk.models.shared;



/**
 * CacheNodeTypeSpecificParametersList
 * A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
**/
public class CacheNodeTypeSpecificParametersList {
    public String allowedValues;
    public CacheNodeTypeSpecificParametersList withAllowedValues(String allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    public CacheNodeTypeSpecificValueList[] cacheNodeTypeSpecificValues;
    public CacheNodeTypeSpecificParametersList withCacheNodeTypeSpecificValues(CacheNodeTypeSpecificValueList[] cacheNodeTypeSpecificValues) {
        this.cacheNodeTypeSpecificValues = cacheNodeTypeSpecificValues;
        return this;
    }
    public ChangeTypeEnum changeType;
    public CacheNodeTypeSpecificParametersList withChangeType(ChangeTypeEnum changeType) {
        this.changeType = changeType;
        return this;
    }
    public String dataType;
    public CacheNodeTypeSpecificParametersList withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    public String description;
    public CacheNodeTypeSpecificParametersList withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean isModifiable;
    public CacheNodeTypeSpecificParametersList withIsModifiable(Boolean isModifiable) {
        this.isModifiable = isModifiable;
        return this;
    }
    public String minimumEngineVersion;
    public CacheNodeTypeSpecificParametersList withMinimumEngineVersion(String minimumEngineVersion) {
        this.minimumEngineVersion = minimumEngineVersion;
        return this;
    }
    public String parameterName;
    public CacheNodeTypeSpecificParametersList withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    public String source;
    public CacheNodeTypeSpecificParametersList withSource(String source) {
        this.source = source;
        return this;
    }
}