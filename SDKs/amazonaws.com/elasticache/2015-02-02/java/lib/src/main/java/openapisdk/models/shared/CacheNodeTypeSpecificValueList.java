package openapisdk.models.shared;



/**
 * CacheNodeTypeSpecificValueList
 * A value that applies only to a certain cache node type.
**/
public class CacheNodeTypeSpecificValueList {
    public String cacheNodeType;
    public CacheNodeTypeSpecificValueList withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    public String value;
    public CacheNodeTypeSpecificValueList withValue(String value) {
        this.value = value;
        return this;
    }
}