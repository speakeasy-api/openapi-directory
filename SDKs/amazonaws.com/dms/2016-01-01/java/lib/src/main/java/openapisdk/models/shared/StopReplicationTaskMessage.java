package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopReplicationTaskMessage
 * <p/>
**/
public class StopReplicationTaskMessage {
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public StopReplicationTaskMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
}