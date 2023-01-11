package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionSucceededEventDetails
 * Contains details about the successful termination of the execution.
**/
public class ExecutionSucceededEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public ExecutionSucceededEventDetails withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public HistoryEventExecutionDataDetails outputDetails;
    public ExecutionSucceededEventDetails withOutputDetails(HistoryEventExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
}