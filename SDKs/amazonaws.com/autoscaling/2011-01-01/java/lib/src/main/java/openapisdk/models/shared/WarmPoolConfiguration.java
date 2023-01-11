package openapisdk.models.shared;



/**
 * WarmPoolConfiguration
 * Describes a warm pool configuration. 
**/
public class WarmPoolConfiguration {
    public Long maxGroupPreparedCapacity;
    public WarmPoolConfiguration withMaxGroupPreparedCapacity(Long maxGroupPreparedCapacity) {
        this.maxGroupPreparedCapacity = maxGroupPreparedCapacity;
        return this;
    }
    public Long minSize;
    public WarmPoolConfiguration withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
    public WarmPoolStateEnum poolState;
    public WarmPoolConfiguration withPoolState(WarmPoolStateEnum poolState) {
        this.poolState = poolState;
        return this;
    }
    public WarmPoolStatusEnum status;
    public WarmPoolConfiguration withStatus(WarmPoolStatusEnum status) {
        this.status = status;
        return this;
    }
}