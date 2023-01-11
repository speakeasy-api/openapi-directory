package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connection
 * Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
**/
public class Connection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public Connection withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointIdentifier")
    public String endpointIdentifier;
    public Connection withEndpointIdentifier(String endpointIdentifier) {
        this.endpointIdentifier = endpointIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastFailureMessage")
    public String lastFailureMessage;
    public Connection withLastFailureMessage(String lastFailureMessage) {
        this.lastFailureMessage = lastFailureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public Connection withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceIdentifier")
    public String replicationInstanceIdentifier;
    public Connection withReplicationInstanceIdentifier(String replicationInstanceIdentifier) {
        this.replicationInstanceIdentifier = replicationInstanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public Connection withStatus(String status) {
        this.status = status;
        return this;
    }
}