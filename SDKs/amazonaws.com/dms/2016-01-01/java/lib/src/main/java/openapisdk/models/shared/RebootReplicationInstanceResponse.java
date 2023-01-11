package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RebootReplicationInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstance")
    public ReplicationInstance replicationInstance;
    public RebootReplicationInstanceResponse withReplicationInstance(ReplicationInstance replicationInstance) {
        this.replicationInstance = replicationInstance;
        return this;
    }
}