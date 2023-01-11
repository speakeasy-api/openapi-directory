package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entries")
    public PutEventsResultEntry[] entries;
    public PutEventsResponse withEntries(PutEventsResultEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEntryCount")
    public Long failedEntryCount;
    public PutEventsResponse withFailedEntryCount(Long failedEntryCount) {
        this.failedEntryCount = failedEntryCount;
        return this;
    }
}