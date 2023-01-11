package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerImagesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImages")
    public ContainerImage[] containerImages;
    public GetContainerImagesResult withContainerImages(ContainerImage[] containerImages) {
        this.containerImages = containerImages;
        return this;
    }
}