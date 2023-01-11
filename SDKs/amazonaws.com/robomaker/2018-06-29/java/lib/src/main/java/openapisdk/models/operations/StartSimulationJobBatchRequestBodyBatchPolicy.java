package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartSimulationJobBatchRequestBodyBatchPolicy
 * Information about the batch policy.
**/
public class StartSimulationJobBatchRequestBodyBatchPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrency")
    public Long maxConcurrency;
    public StartSimulationJobBatchRequestBodyBatchPolicy withMaxConcurrency(Long maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInSeconds")
    public Long timeoutInSeconds;
    public StartSimulationJobBatchRequestBodyBatchPolicy withTimeoutInSeconds(Long timeoutInSeconds) {
        this.timeoutInSeconds = timeoutInSeconds;
        return this;
    }
}