package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RefreshSchemasMessage
 * <p/>
**/
public class RefreshSchemasMessage {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public RefreshSchemasMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public RefreshSchemasMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
}