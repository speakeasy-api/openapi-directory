package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartReplicationTaskResponse
 * <p/>
**/
public class StartReplicationTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTask")
    public ReplicationTask replicationTask;
    public StartReplicationTaskResponse withReplicationTask(ReplicationTask replicationTask) {
        this.replicationTask = replicationTask;
        return this;
    }
}