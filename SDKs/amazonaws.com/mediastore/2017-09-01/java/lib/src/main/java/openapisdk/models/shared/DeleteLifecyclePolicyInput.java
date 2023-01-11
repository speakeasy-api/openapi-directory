package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLifecyclePolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public DeleteLifecyclePolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}