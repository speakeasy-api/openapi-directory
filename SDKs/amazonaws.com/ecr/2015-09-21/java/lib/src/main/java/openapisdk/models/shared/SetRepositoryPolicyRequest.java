package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetRepositoryPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public SetRepositoryPolicyRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("policyText")
    public String policyText;
    public SetRepositoryPolicyRequest withPolicyText(String policyText) {
        this.policyText = policyText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public SetRepositoryPolicyRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public SetRepositoryPolicyRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}