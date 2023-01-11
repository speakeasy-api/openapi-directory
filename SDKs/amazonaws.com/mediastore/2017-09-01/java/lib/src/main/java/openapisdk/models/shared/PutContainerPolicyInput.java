package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutContainerPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public PutContainerPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonProperty("Policy")
    public String policy;
    public PutContainerPolicyInput withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}