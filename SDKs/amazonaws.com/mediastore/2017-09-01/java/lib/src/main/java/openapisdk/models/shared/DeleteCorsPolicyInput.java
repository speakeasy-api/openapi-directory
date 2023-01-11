package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCorsPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public DeleteCorsPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}