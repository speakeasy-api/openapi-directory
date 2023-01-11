package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public StartExecutionInput withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StartExecutionInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public StartExecutionInput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceHeader")
    public String traceHeader;
    public StartExecutionInput withTraceHeader(String traceHeader) {
        this.traceHeader = traceHeader;
        return this;
    }
}