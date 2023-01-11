package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunFailures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assertion")
    public RunAMonitor200ApplicationJsonRunFailuresAssertion assertion;
    public RunAMonitor200ApplicationJsonRunFailures withAssertion(RunAMonitor200ApplicationJsonRunFailuresAssertion assertion) {
        this.assertion = assertion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public Double executionId;
    public RunAMonitor200ApplicationJsonRunFailures withExecutionId(Double executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public RunAMonitor200ApplicationJsonRunFailures withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RunAMonitor200ApplicationJsonRunFailures withName(String name) {
        this.name = name;
        return this;
    }
}