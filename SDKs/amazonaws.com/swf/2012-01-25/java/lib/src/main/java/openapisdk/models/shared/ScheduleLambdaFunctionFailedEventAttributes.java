package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScheduleLambdaFunctionFailedEventAttributes
 * Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
public class ScheduleLambdaFunctionFailedEventAttributes {
    @JsonProperty("cause")
    public ScheduleLambdaFunctionFailedCauseEnum cause;
    public ScheduleLambdaFunctionFailedEventAttributes withCause(ScheduleLambdaFunctionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public ScheduleLambdaFunctionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScheduleLambdaFunctionFailedEventAttributes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ScheduleLambdaFunctionFailedEventAttributes withName(String name) {
        this.name = name;
        return this;
    }
}