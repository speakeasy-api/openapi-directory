package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutTargetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEntries")
    public PutTargetsResultEntry[] failedEntries;
    public PutTargetsResponse withFailedEntries(PutTargetsResultEntry[] failedEntries) {
        this.failedEntries = failedEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEntryCount")
    public Long failedEntryCount;
    public PutTargetsResponse withFailedEntryCount(Long failedEntryCount) {
        this.failedEntryCount = failedEntryCount;
        return this;
    }
}