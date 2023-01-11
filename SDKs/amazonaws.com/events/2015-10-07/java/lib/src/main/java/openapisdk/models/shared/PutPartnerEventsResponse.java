package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPartnerEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entries")
    public PutPartnerEventsResultEntry[] entries;
    public PutPartnerEventsResponse withEntries(PutPartnerEventsResultEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEntryCount")
    public Long failedEntryCount;
    public PutPartnerEventsResponse withFailedEntryCount(Long failedEntryCount) {
        this.failedEntryCount = failedEntryCount;
        return this;
    }
}