package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivitySucceededEventDetails
 * Contains details about an activity that successfully terminated during an execution.
**/
public class ActivitySucceededEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public ActivitySucceededEventDetails withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public HistoryEventExecutionDataDetails outputDetails;
    public ActivitySucceededEventDetails withOutputDetails(HistoryEventExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
}