package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RecordMarkerFailedEventAttributes
 * Provides the details of the <code>RecordMarkerFailed</code> event.
**/
public class RecordMarkerFailedEventAttributes {
    @JsonProperty("cause")
    public RecordMarkerFailedCauseEnum cause;
    public RecordMarkerFailedEventAttributes withCause(RecordMarkerFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public RecordMarkerFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("markerName")
    public String markerName;
    public RecordMarkerFailedEventAttributes withMarkerName(String markerName) {
        this.markerName = markerName;
        return this;
    }
}