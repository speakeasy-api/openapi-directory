package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RequestCancelActivityTaskFailedEventAttributes
 * Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
**/
public class RequestCancelActivityTaskFailedEventAttributes {
    @JsonProperty("activityId")
    public String activityId;
    public RequestCancelActivityTaskFailedEventAttributes withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonProperty("cause")
    public RequestCancelActivityTaskFailedCauseEnum cause;
    public RequestCancelActivityTaskFailedEventAttributes withCause(RequestCancelActivityTaskFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public RequestCancelActivityTaskFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}