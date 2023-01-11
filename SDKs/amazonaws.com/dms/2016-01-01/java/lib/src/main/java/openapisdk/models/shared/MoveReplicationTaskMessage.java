package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MoveReplicationTaskMessage
 * <p/>
**/
public class MoveReplicationTaskMessage {
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public MoveReplicationTaskMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonProperty("TargetReplicationInstanceArn")
    public String targetReplicationInstanceArn;
    public MoveReplicationTaskMessage withTargetReplicationInstanceArn(String targetReplicationInstanceArn) {
        this.targetReplicationInstanceArn = targetReplicationInstanceArn;
        return this;
    }
}