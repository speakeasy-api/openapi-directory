package openapisdk.models.shared;



/**
 * PendingModifiedValues
 * A group of settings that are applied to the cluster in the future, or that are currently being applied.
**/
public class PendingModifiedValues {
    public AuthTokenUpdateStatusEnum authTokenStatus;
    public PendingModifiedValues withAuthTokenStatus(AuthTokenUpdateStatusEnum authTokenStatus) {
        this.authTokenStatus = authTokenStatus;
        return this;
    }
    public java.util.Map<String, Object>[] cacheNodeIdsToRemove;
    public PendingModifiedValues withCacheNodeIdsToRemove(java.util.Map<String, Object>[] cacheNodeIdsToRemove) {
        this.cacheNodeIdsToRemove = cacheNodeIdsToRemove;
        return this;
    }
    public String cacheNodeType;
    public PendingModifiedValues withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    public String engineVersion;
    public PendingModifiedValues withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public PendingLogDeliveryConfiguration[] logDeliveryConfigurations;
    public PendingModifiedValues withLogDeliveryConfigurations(PendingLogDeliveryConfiguration[] logDeliveryConfigurations) {
        this.logDeliveryConfigurations = logDeliveryConfigurations;
        return this;
    }
    public Long numCacheNodes;
    public PendingModifiedValues withNumCacheNodes(Long numCacheNodes) {
        this.numCacheNodes = numCacheNodes;
        return this;
    }
}