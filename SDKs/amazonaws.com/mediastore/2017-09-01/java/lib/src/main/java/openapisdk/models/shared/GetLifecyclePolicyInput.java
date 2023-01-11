package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLifecyclePolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public GetLifecyclePolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}