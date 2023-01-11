package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentIoTJobConfiguration
 * Contains information about an IoT job configuration.
**/
public class DeploymentIoTJobConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortConfig")
    public IoTJobAbortConfig abortConfig;
    public DeploymentIoTJobConfiguration withAbortConfig(IoTJobAbortConfig abortConfig) {
        this.abortConfig = abortConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionsRolloutConfig")
    public IoTJobExecutionsRolloutConfig jobExecutionsRolloutConfig;
    public DeploymentIoTJobConfiguration withJobExecutionsRolloutConfig(IoTJobExecutionsRolloutConfig jobExecutionsRolloutConfig) {
        this.jobExecutionsRolloutConfig = jobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public IoTJobTimeoutConfig timeoutConfig;
    public DeploymentIoTJobConfiguration withTimeoutConfig(IoTJobTimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}