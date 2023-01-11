package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteReplicationTaskMessage
 * <p/>
**/
public class DeleteReplicationTaskMessage {
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public DeleteReplicationTaskMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
}