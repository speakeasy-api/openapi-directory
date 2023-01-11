package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddEventSourceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchSize")
    public Long batchSize;
    public AddEventSourceRequestBody withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonProperty("EventSource")
    public String eventSource;
    public AddEventSourceRequestBody withEventSource(String eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public AddEventSourceRequestBody withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public AddEventSourceRequestBody withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public AddEventSourceRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
}