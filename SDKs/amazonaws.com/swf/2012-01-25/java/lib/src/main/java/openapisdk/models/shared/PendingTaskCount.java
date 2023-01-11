package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PendingTaskCount
 * Contains the count of tasks in a task list.
**/
public class PendingTaskCount {
    @JsonProperty("count")
    public Long count;
    public PendingTaskCount withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncated")
    public Boolean truncated;
    public PendingTaskCount withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}