package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterContainerImageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public ContainerImage containerImage;
    public RegisterContainerImageResult withContainerImage(ContainerImage containerImage) {
        this.containerImage = containerImage;
        return this;
    }
}