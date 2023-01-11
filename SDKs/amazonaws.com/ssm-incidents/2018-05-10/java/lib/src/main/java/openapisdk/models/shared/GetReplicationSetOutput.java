package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetReplicationSetOutput {
    @JsonProperty("replicationSet")
    public ReplicationSet replicationSet;
    public GetReplicationSetOutput withReplicationSet(ReplicationSet replicationSet) {
        this.replicationSet = replicationSet;
        return this;
    }
}