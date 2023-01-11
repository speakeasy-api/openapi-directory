package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteReplicationJobRequest {
    @JsonProperty("replicationJobId")
    public String replicationJobId;
    public DeleteReplicationJobRequest withReplicationJobId(String replicationJobId) {
        this.replicationJobId = replicationJobId;
        return this;
    }
}