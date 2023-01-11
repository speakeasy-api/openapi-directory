package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentRequestBodyIotJobConfiguration
 * Contains information about an IoT job configuration.
**/
public class CreateDeploymentRequestBodyIotJobConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortConfig")
    public openapisdk.models.shared.IoTJobAbortConfig abortConfig;
    public CreateDeploymentRequestBodyIotJobConfiguration withAbortConfig(openapisdk.models.shared.IoTJobAbortConfig abortConfig) {
        this.abortConfig = abortConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionsRolloutConfig")
    public openapisdk.models.shared.IoTJobExecutionsRolloutConfig jobExecutionsRolloutConfig;
    public CreateDeploymentRequestBodyIotJobConfiguration withJobExecutionsRolloutConfig(openapisdk.models.shared.IoTJobExecutionsRolloutConfig jobExecutionsRolloutConfig) {
        this.jobExecutionsRolloutConfig = jobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public openapisdk.models.shared.IoTJobTimeoutConfig timeoutConfig;
    public CreateDeploymentRequestBodyIotJobConfiguration withTimeoutConfig(openapisdk.models.shared.IoTJobTimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}