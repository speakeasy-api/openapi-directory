package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartLifecyclePolicyPreviewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecyclePolicyText")
    public String lifecyclePolicyText;
    public StartLifecyclePolicyPreviewResponse withLifecyclePolicyText(String lifecyclePolicyText) {
        this.lifecyclePolicyText = lifecyclePolicyText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public StartLifecyclePolicyPreviewResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public StartLifecyclePolicyPreviewResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LifecyclePolicyPreviewStatusEnum status;
    public StartLifecyclePolicyPreviewResponse withStatus(LifecyclePolicyPreviewStatusEnum status) {
        this.status = status;
        return this;
    }
}