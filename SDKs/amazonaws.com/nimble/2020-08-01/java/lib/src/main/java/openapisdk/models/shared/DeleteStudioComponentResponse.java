package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteStudioComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioComponent")
    public StudioComponent studioComponent;
    public DeleteStudioComponentResponse withStudioComponent(StudioComponent studioComponent) {
        this.studioComponent = studioComponent;
        return this;
    }
}