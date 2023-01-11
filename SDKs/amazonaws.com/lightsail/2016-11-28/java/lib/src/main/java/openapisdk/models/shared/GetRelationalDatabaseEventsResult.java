package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseEventsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetRelationalDatabaseEventsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseEvents")
    public RelationalDatabaseEvent[] relationalDatabaseEvents;
    public GetRelationalDatabaseEventsResult withRelationalDatabaseEvents(RelationalDatabaseEvent[] relationalDatabaseEvents) {
        this.relationalDatabaseEvents = relationalDatabaseEvents;
        return this;
    }
}