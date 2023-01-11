package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveTargetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEntries")
    public RemoveTargetsResultEntry[] failedEntries;
    public RemoveTargetsResponse withFailedEntries(RemoveTargetsResultEntry[] failedEntries) {
        this.failedEntries = failedEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEntryCount")
    public Long failedEntryCount;
    public RemoveTargetsResponse withFailedEntryCount(Long failedEntryCount) {
        this.failedEntryCount = failedEntryCount;
        return this;
    }
}