package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSnapshotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Snapshot")
    public Snapshot snapshot;
    public DeleteSnapshotResponse withSnapshot(Snapshot snapshot) {
        this.snapshot = snapshot;
        return this;
    }
}