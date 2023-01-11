package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchEventsExecutionDataDetails
 * Provides details about execution input or output.
**/
public class CloudWatchEventsExecutionDataDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Boolean included;
    public CloudWatchEventsExecutionDataDetails withIncluded(Boolean included) {
        this.included = included;
        return this;
    }
}