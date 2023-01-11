package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateReplicationTaskResponse
 * <p/>
**/
public class CreateReplicationTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTask")
    public ReplicationTask replicationTask;
    public CreateReplicationTaskResponse withReplicationTask(ReplicationTask replicationTask) {
        this.replicationTask = replicationTask;
        return this;
    }
}