package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReplicateKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BypassPolicyLockoutSafetyCheck")
    public Boolean bypassPolicyLockoutSafetyCheck;
    public ReplicateKeyRequest withBypassPolicyLockoutSafetyCheck(Boolean bypassPolicyLockoutSafetyCheck) {
        this.bypassPolicyLockoutSafetyCheck = bypassPolicyLockoutSafetyCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ReplicateKeyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public ReplicateKeyRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public ReplicateKeyRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("ReplicaRegion")
    public String replicaRegion;
    public ReplicateKeyRequest withReplicaRegion(String replicaRegion) {
        this.replicaRegion = replicaRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public ReplicateKeyRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}