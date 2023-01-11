package openapisdk.models.shared;



/**
 * CacheParameterGroupList
 * Represents the output of a <code>CreateCacheParameterGroup</code> operation.
**/
public class CacheParameterGroupList {
    public String arn;
    public CacheParameterGroupList withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String cacheParameterGroupFamily;
    public CacheParameterGroupList withCacheParameterGroupFamily(String cacheParameterGroupFamily) {
        this.cacheParameterGroupFamily = cacheParameterGroupFamily;
        return this;
    }
    public String cacheParameterGroupName;
    public CacheParameterGroupList withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    public String description;
    public CacheParameterGroupList withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean isGlobal;
    public CacheParameterGroupList withIsGlobal(Boolean isGlobal) {
        this.isGlobal = isGlobal;
        return this;
    }
}