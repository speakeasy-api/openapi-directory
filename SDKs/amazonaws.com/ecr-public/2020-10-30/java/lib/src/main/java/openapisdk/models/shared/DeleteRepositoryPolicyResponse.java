package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRepositoryPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyText")
    public String policyText;
    public DeleteRepositoryPolicyResponse withPolicyText(String policyText) {
        this.policyText = policyText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public DeleteRepositoryPolicyResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public DeleteRepositoryPolicyResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}