package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyReplicationTaskResponse
 * <p/>
**/
public class ModifyReplicationTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTask")
    public ReplicationTask replicationTask;
    public ModifyReplicationTaskResponse withReplicationTask(ReplicationTask replicationTask) {
        this.replicationTask = replicationTask;
        return this;
    }
}