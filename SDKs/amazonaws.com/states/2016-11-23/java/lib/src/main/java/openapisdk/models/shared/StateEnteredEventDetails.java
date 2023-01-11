package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateEnteredEventDetails
 * Contains details about a state entered during an execution.
**/
public class StateEnteredEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public StateEnteredEventDetails withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDetails")
    public HistoryEventExecutionDataDetails inputDetails;
    public StateEnteredEventDetails withInputDetails(HistoryEventExecutionDataDetails inputDetails) {
        this.inputDetails = inputDetails;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public StateEnteredEventDetails withName(String name) {
        this.name = name;
        return this;
    }
}