package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CanaryRunConfigOutput
 * A structure that contains information about a canary run.
**/
public class CanaryRunConfigOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActiveTracing")
    public Boolean activeTracing;
    public CanaryRunConfigOutput withActiveTracing(Boolean activeTracing) {
        this.activeTracing = activeTracing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemoryInMB")
    public Long memoryInMB;
    public CanaryRunConfigOutput withMemoryInMb(Long memoryInMB) {
        this.memoryInMB = memoryInMB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeoutInSeconds")
    public Long timeoutInSeconds;
    public CanaryRunConfigOutput withTimeoutInSeconds(Long timeoutInSeconds) {
        this.timeoutInSeconds = timeoutInSeconds;
        return this;
    }
}