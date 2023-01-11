package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProgressDetail
 * Information about the progress of a deployment job.
**/
public class ProgressDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentProgress")
    public RobotDeploymentStepEnum currentProgress;
    public ProgressDetail withCurrentProgress(RobotDeploymentStepEnum currentProgress) {
        this.currentProgress = currentProgress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedTimeRemainingSeconds")
    public Long estimatedTimeRemainingSeconds;
    public ProgressDetail withEstimatedTimeRemainingSeconds(Long estimatedTimeRemainingSeconds) {
        this.estimatedTimeRemainingSeconds = estimatedTimeRemainingSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentDone")
    public Float percentDone;
    public ProgressDetail withPercentDone(Float percentDone) {
        this.percentDone = percentDone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetResource")
    public String targetResource;
    public ProgressDetail withTargetResource(String targetResource) {
        this.targetResource = targetResource;
        return this;
    }
}