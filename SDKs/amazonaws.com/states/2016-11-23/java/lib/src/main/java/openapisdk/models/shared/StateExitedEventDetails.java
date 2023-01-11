package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateExitedEventDetails
 * Contains details about an exit from a state during an execution.
**/
public class StateExitedEventDetails {
    @JsonProperty("name")
    public String name;
    public StateExitedEventDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public StateExitedEventDetails withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public HistoryEventExecutionDataDetails outputDetails;
    public StateExitedEventDetails withOutputDetails(HistoryEventExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
}