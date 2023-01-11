package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateContainerOutput {
    @JsonProperty("Container")
    public Container container;
    public CreateContainerOutput withContainer(Container container) {
        this.container = container;
        return this;
    }
}