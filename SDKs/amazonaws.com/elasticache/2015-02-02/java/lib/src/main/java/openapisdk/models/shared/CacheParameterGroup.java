package openapisdk.models.shared;



/**
 * CacheParameterGroup
 * Represents the output of a <code>CreateCacheParameterGroup</code> operation.
**/
public class CacheParameterGroup {
    public String arn;
    public CacheParameterGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String cacheParameterGroupFamily;
    public CacheParameterGroup withCacheParameterGroupFamily(String cacheParameterGroupFamily) {
        this.cacheParameterGroupFamily = cacheParameterGroupFamily;
        return this;
    }
    public String cacheParameterGroupName;
    public CacheParameterGroup withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    public String description;
    public CacheParameterGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean isGlobal;
    public CacheParameterGroup withIsGlobal(Boolean isGlobal) {
        this.isGlobal = isGlobal;
        return this;
    }
}