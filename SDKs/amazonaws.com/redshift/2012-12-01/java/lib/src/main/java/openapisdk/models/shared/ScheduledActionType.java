package openapisdk.models.shared;



/**
 * ScheduledActionType
 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. 
**/
public class ScheduledActionType {
    public PauseClusterMessage pauseCluster;
    public ScheduledActionType withPauseCluster(PauseClusterMessage pauseCluster) {
        this.pauseCluster = pauseCluster;
        return this;
    }
    public ResizeClusterMessage resizeCluster;
    public ScheduledActionType withResizeCluster(ResizeClusterMessage resizeCluster) {
        this.resizeCluster = resizeCluster;
        return this;
    }
    public ResumeClusterMessage resumeCluster;
    public ScheduledActionType withResumeCluster(ResumeClusterMessage resumeCluster) {
        this.resumeCluster = resumeCluster;
        return this;
    }
}