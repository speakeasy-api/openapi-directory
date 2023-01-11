package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterContainerInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerInstance")
    public ContainerInstance containerInstance;
    public RegisterContainerInstanceResponse withContainerInstance(ContainerInstance containerInstance) {
        this.containerInstance = containerInstance;
        return this;
    }
}