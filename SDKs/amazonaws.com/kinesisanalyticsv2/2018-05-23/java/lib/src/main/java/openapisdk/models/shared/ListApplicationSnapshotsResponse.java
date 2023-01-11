package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationSnapshotsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApplicationSnapshotsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotSummaries")
    public SnapshotDetails[] snapshotSummaries;
    public ListApplicationSnapshotsResponse withSnapshotSummaries(SnapshotDetails[] snapshotSummaries) {
        this.snapshotSummaries = snapshotSummaries;
        return this;
    }
}