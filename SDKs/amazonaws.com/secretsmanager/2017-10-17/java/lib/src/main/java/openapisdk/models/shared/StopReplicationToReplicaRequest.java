package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopReplicationToReplicaRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public StopReplicationToReplicaRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}