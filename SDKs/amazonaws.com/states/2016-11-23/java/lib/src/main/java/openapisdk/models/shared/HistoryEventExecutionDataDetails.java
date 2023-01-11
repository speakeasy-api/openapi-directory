package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistoryEventExecutionDataDetails
 * Provides details about input or output in an execution history event.
**/
public class HistoryEventExecutionDataDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncated")
    public Boolean truncated;
    public HistoryEventExecutionDataDetails withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}