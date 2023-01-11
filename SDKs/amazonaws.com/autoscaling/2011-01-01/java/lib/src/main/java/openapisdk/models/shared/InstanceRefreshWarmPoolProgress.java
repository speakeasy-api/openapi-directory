package openapisdk.models.shared;



/**
 * InstanceRefreshWarmPoolProgress
 * Reports the progress of an instance refresh on instances that are in the warm pool.
**/
public class InstanceRefreshWarmPoolProgress {
    public Long instancesToUpdate;
    public InstanceRefreshWarmPoolProgress withInstancesToUpdate(Long instancesToUpdate) {
        this.instancesToUpdate = instancesToUpdate;
        return this;
    }
    public Long percentageComplete;
    public InstanceRefreshWarmPoolProgress withPercentageComplete(Long percentageComplete) {
        this.percentageComplete = percentageComplete;
        return this;
    }
}