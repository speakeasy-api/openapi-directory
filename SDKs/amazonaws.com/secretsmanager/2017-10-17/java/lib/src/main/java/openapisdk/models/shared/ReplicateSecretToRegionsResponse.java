package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReplicateSecretToRegionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public ReplicateSecretToRegionsResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationStatus")
    public ReplicationStatusType[] replicationStatus;
    public ReplicateSecretToRegionsResponse withReplicationStatus(ReplicationStatusType[] replicationStatus) {
        this.replicationStatus = replicationStatus;
        return this;
    }
}