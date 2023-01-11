package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutPartnerEventsRequest {
    @JsonProperty("Entries")
    public PutPartnerEventsRequestEntry[] entries;
    public PutPartnerEventsRequest withEntries(PutPartnerEventsRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}