package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteReplicationTaskResponse
 * <p/>
**/
public class DeleteReplicationTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTask")
    public ReplicationTask replicationTask;
    public DeleteReplicationTaskResponse withReplicationTask(ReplicationTask replicationTask) {
        this.replicationTask = replicationTask;
        return this;
    }
}