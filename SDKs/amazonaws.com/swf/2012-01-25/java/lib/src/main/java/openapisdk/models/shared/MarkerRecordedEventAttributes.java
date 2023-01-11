package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarkerRecordedEventAttributes
 * Provides the details of the <code>MarkerRecorded</code> event.
**/
public class MarkerRecordedEventAttributes {
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public MarkerRecordedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public MarkerRecordedEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonProperty("markerName")
    public String markerName;
    public MarkerRecordedEventAttributes withMarkerName(String markerName) {
        this.markerName = markerName;
        return this;
    }
}