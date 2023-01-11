package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContainerInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public DeleteContainerInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}