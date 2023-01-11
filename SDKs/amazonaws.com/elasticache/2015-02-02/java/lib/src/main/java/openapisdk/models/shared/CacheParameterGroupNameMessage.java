package openapisdk.models.shared;



/**
 * CacheParameterGroupNameMessage
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>
**/
public class CacheParameterGroupNameMessage {
    public String cacheParameterGroupName;
    public CacheParameterGroupNameMessage withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
}