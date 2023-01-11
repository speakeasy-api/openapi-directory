package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveRegionsFromReplicationRequest {
    @JsonProperty("RemoveReplicaRegions")
    public String[] removeReplicaRegions;
    public RemoveRegionsFromReplicationRequest withRemoveReplicaRegions(String[] removeReplicaRegions) {
        this.removeReplicaRegions = removeReplicaRegions;
        return this;
    }
    @JsonProperty("SecretId")
    public String secretId;
    public RemoveRegionsFromReplicationRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}