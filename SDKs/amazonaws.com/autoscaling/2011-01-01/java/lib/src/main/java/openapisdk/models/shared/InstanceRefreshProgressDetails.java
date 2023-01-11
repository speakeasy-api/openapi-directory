package openapisdk.models.shared;



/**
 * InstanceRefreshProgressDetails
 * Reports the progress of an instance refresh on an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
**/
public class InstanceRefreshProgressDetails {
    public InstanceRefreshLivePoolProgress livePoolProgress;
    public InstanceRefreshProgressDetails withLivePoolProgress(InstanceRefreshLivePoolProgress livePoolProgress) {
        this.livePoolProgress = livePoolProgress;
        return this;
    }
    public InstanceRefreshWarmPoolProgress warmPoolProgress;
    public InstanceRefreshProgressDetails withWarmPoolProgress(InstanceRefreshWarmPoolProgress warmPoolProgress) {
        this.warmPoolProgress = warmPoolProgress;
        return this;
    }
}