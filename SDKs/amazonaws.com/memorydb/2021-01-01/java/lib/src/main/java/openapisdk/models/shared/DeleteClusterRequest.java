package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteClusterRequest {
    @JsonProperty("ClusterName")
    public String clusterName;
    public DeleteClusterRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalSnapshotName")
    public String finalSnapshotName;
    public DeleteClusterRequest withFinalSnapshotName(String finalSnapshotName) {
        this.finalSnapshotName = finalSnapshotName;
        return this;
    }
}