package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetRepositoryPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyText")
    public String policyText;
    public SetRepositoryPolicyResponse withPolicyText(String policyText) {
        this.policyText = policyText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public SetRepositoryPolicyResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public SetRepositoryPolicyResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}