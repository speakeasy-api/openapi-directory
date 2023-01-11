package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContainerPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public DeleteContainerPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}