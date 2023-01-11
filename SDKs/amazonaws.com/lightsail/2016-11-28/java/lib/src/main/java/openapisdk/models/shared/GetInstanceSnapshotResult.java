package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceSnapshotResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceSnapshot")
    public InstanceSnapshot instanceSnapshot;
    public GetInstanceSnapshotResult withInstanceSnapshot(InstanceSnapshot instanceSnapshot) {
        this.instanceSnapshot = instanceSnapshot;
        return this;
    }
}