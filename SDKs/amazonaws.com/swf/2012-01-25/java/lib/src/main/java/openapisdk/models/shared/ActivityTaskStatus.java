package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActivityTaskStatus
 * Status information about an activity task.
**/
public class ActivityTaskStatus {
    @JsonProperty("cancelRequested")
    public Boolean cancelRequested;
    public ActivityTaskStatus withCancelRequested(Boolean cancelRequested) {
        this.cancelRequested = cancelRequested;
        return this;
    }
}