package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopReplicationTaskResponse
 * <p/>
**/
public class StopReplicationTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTask")
    public ReplicationTask replicationTask;
    public StopReplicationTaskResponse withReplicationTask(ReplicationTask replicationTask) {
        this.replicationTask = replicationTask;
        return this;
    }
}