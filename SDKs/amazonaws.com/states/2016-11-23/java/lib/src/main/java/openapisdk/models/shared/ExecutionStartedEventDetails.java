package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionStartedEventDetails
 * Contains details about the start of the execution.
**/
public class ExecutionStartedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public ExecutionStartedEventDetails withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDetails")
    public HistoryEventExecutionDataDetails inputDetails;
    public ExecutionStartedEventDetails withInputDetails(HistoryEventExecutionDataDetails inputDetails) {
        this.inputDetails = inputDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public ExecutionStartedEventDetails withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}