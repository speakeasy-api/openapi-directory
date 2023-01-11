package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventsRequest {
    @JsonProperty("Entries")
    public PutEventsRequestEntry[] entries;
    public PutEventsRequest withEntries(PutEventsRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}