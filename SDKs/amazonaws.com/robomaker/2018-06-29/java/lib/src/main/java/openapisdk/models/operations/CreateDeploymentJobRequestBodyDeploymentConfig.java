package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentJobRequestBodyDeploymentConfig
 * Information about a deployment configuration.
**/
public class CreateDeploymentJobRequestBodyDeploymentConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrentDeploymentPercentage")
    public Long concurrentDeploymentPercentage;
    public CreateDeploymentJobRequestBodyDeploymentConfig withConcurrentDeploymentPercentage(Long concurrentDeploymentPercentage) {
        this.concurrentDeploymentPercentage = concurrentDeploymentPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadConditionFile")
    public openapisdk.models.shared.S3Object downloadConditionFile;
    public CreateDeploymentJobRequestBodyDeploymentConfig withDownloadConditionFile(openapisdk.models.shared.S3Object downloadConditionFile) {
        this.downloadConditionFile = downloadConditionFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureThresholdPercentage")
    public Long failureThresholdPercentage;
    public CreateDeploymentJobRequestBodyDeploymentConfig withFailureThresholdPercentage(Long failureThresholdPercentage) {
        this.failureThresholdPercentage = failureThresholdPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotDeploymentTimeoutInSeconds")
    public Long robotDeploymentTimeoutInSeconds;
    public CreateDeploymentJobRequestBodyDeploymentConfig withRobotDeploymentTimeoutInSeconds(Long robotDeploymentTimeoutInSeconds) {
        this.robotDeploymentTimeoutInSeconds = robotDeploymentTimeoutInSeconds;
        return this;
    }
}