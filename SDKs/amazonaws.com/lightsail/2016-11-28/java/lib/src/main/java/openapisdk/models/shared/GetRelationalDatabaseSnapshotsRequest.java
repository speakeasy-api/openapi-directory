package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseSnapshotsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetRelationalDatabaseSnapshotsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}