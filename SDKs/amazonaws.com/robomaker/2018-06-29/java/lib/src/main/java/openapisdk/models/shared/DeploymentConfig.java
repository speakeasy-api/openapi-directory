package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentConfig
 * Information about a deployment configuration.
**/
public class DeploymentConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrentDeploymentPercentage")
    public Long concurrentDeploymentPercentage;
    public DeploymentConfig withConcurrentDeploymentPercentage(Long concurrentDeploymentPercentage) {
        this.concurrentDeploymentPercentage = concurrentDeploymentPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadConditionFile")
    public S3Object downloadConditionFile;
    public DeploymentConfig withDownloadConditionFile(S3Object downloadConditionFile) {
        this.downloadConditionFile = downloadConditionFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureThresholdPercentage")
    public Long failureThresholdPercentage;
    public DeploymentConfig withFailureThresholdPercentage(Long failureThresholdPercentage) {
        this.failureThresholdPercentage = failureThresholdPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotDeploymentTimeoutInSeconds")
    public Long robotDeploymentTimeoutInSeconds;
    public DeploymentConfig withRobotDeploymentTimeoutInSeconds(Long robotDeploymentTimeoutInSeconds) {
        this.robotDeploymentTimeoutInSeconds = robotDeploymentTimeoutInSeconds;
        return this;
    }
}