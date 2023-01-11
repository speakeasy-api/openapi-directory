package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionSucceededEventDetails
 * Contains details about a lambda function that successfully terminated during an execution.
**/
public class LambdaFunctionSucceededEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public LambdaFunctionSucceededEventDetails withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public HistoryEventExecutionDataDetails outputDetails;
    public LambdaFunctionSucceededEventDetails withOutputDetails(HistoryEventExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
}