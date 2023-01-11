package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionCompletedEventAttributes
 * Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
**/
public class LambdaFunctionCompletedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public LambdaFunctionCompletedEventAttributes withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public LambdaFunctionCompletedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public LambdaFunctionCompletedEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
}