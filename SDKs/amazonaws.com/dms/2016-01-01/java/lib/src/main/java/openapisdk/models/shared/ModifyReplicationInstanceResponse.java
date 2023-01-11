package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyReplicationInstanceResponse
 * <p/>
**/
public class ModifyReplicationInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstance")
    public ReplicationInstance replicationInstance;
    public ModifyReplicationInstanceResponse withReplicationInstance(ReplicationInstance replicationInstance) {
        this.replicationInstance = replicationInstance;
        return this;
    }
}