package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStudioComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioComponent")
    public StudioComponent studioComponent;
    public UpdateStudioComponentResponse withStudioComponent(StudioComponent studioComponent) {
        this.studioComponent = studioComponent;
        return this;
    }
}