package openapisdk.models.shared;



/**
 * CacheParameterGroupStatus
 * Status of the cache parameter group.
**/
public class CacheParameterGroupStatus {
    public java.util.Map<String, Object>[] cacheNodeIdsToReboot;
    public CacheParameterGroupStatus withCacheNodeIdsToReboot(java.util.Map<String, Object>[] cacheNodeIdsToReboot) {
        this.cacheNodeIdsToReboot = cacheNodeIdsToReboot;
        return this;
    }
    public String cacheParameterGroupName;
    public CacheParameterGroupStatus withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    public String parameterApplyStatus;
    public CacheParameterGroupStatus withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
}