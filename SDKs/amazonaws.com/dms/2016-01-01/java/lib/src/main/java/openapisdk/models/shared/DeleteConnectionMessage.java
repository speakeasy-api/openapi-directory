package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteConnectionMessage
 * <p/>
**/
public class DeleteConnectionMessage {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DeleteConnectionMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public DeleteConnectionMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
}