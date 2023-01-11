package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceSnapshotsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceSnapshots")
    public InstanceSnapshot[] instanceSnapshots;
    public GetInstanceSnapshotsResult withInstanceSnapshots(InstanceSnapshot[] instanceSnapshots) {
        this.instanceSnapshots = instanceSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetInstanceSnapshotsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}