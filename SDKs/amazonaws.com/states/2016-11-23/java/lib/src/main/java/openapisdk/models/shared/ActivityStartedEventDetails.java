package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityStartedEventDetails
 * Contains details about the start of an activity during an execution.
**/
public class ActivityStartedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerName")
    public String workerName;
    public ActivityStartedEventDetails withWorkerName(String workerName) {
        this.workerName = workerName;
        return this;
    }
}