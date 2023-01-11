package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReplicateSecretToRegionsRequest {
    @JsonProperty("AddReplicaRegions")
    public ReplicaRegionType[] addReplicaRegions;
    public ReplicateSecretToRegionsRequest withAddReplicaRegions(ReplicaRegionType[] addReplicaRegions) {
        this.addReplicaRegions = addReplicaRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForceOverwriteReplicaSecret")
    public Boolean forceOverwriteReplicaSecret;
    public ReplicateSecretToRegionsRequest withForceOverwriteReplicaSecret(Boolean forceOverwriteReplicaSecret) {
        this.forceOverwriteReplicaSecret = forceOverwriteReplicaSecret;
        return this;
    }
    @JsonProperty("SecretId")
    public String secretId;
    public ReplicateSecretToRegionsRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}