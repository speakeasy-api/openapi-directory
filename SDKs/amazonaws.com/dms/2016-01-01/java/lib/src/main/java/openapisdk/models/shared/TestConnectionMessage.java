package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TestConnectionMessage
 * <p/>
**/
public class TestConnectionMessage {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public TestConnectionMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public TestConnectionMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
}