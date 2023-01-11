package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteReplicationInstanceResponse
 * <p/>
**/
public class DeleteReplicationInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstance")
    public ReplicationInstance replicationInstance;
    public DeleteReplicationInstanceResponse withReplicationInstance(ReplicationInstance replicationInstance) {
        this.replicationInstance = replicationInstance;
        return this;
    }
}