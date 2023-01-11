package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteReplicationInstanceMessage
 * <p/>
**/
public class DeleteReplicationInstanceMessage {
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public DeleteReplicationInstanceMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
}