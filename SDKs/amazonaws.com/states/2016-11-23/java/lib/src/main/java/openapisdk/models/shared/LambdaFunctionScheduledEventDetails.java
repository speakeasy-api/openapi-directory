package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionScheduledEventDetails
 * Contains details about a lambda function scheduled during an execution.
**/
public class LambdaFunctionScheduledEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public LambdaFunctionScheduledEventDetails withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDetails")
    public HistoryEventExecutionDataDetails inputDetails;
    public LambdaFunctionScheduledEventDetails withInputDetails(HistoryEventExecutionDataDetails inputDetails) {
        this.inputDetails = inputDetails;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public LambdaFunctionScheduledEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInSeconds")
    public Long timeoutInSeconds;
    public LambdaFunctionScheduledEventDetails withTimeoutInSeconds(Long timeoutInSeconds) {
        this.timeoutInSeconds = timeoutInSeconds;
        return this;
    }
}