package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityScheduleFailedEventDetails
 * Contains details about an activity schedule failure that occurred during an execution.
**/
public class ActivityScheduleFailedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public ActivityScheduleFailedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public ActivityScheduleFailedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
}