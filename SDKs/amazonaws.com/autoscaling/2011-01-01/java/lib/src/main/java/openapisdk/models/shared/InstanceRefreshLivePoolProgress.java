package openapisdk.models.shared;



/**
 * InstanceRefreshLivePoolProgress
 * Reports the progress of an instance refresh on instances that are in the Auto Scaling group.
**/
public class InstanceRefreshLivePoolProgress {
    public Long instancesToUpdate;
    public InstanceRefreshLivePoolProgress withInstancesToUpdate(Long instancesToUpdate) {
        this.instancesToUpdate = instancesToUpdate;
        return this;
    }
    public Long percentageComplete;
    public InstanceRefreshLivePoolProgress withPercentageComplete(Long percentageComplete) {
        this.percentageComplete = percentageComplete;
        return this;
    }
}