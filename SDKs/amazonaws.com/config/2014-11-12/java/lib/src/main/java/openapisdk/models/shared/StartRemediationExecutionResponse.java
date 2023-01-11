package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartRemediationExecutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedItems")
    public ResourceKey[] failedItems;
    public StartRemediationExecutionResponse withFailedItems(ResourceKey[] failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureMessage")
    public String failureMessage;
    public StartRemediationExecutionResponse withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}