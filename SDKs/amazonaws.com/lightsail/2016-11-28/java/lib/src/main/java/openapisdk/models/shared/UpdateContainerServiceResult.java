package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateContainerServiceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerService")
    public ContainerService containerService;
    public UpdateContainerServiceResult withContainerService(ContainerService containerService) {
        this.containerService = containerService;
        return this;
    }
}