package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateProjectRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementTemplate")
    public UpdateProjectRequestBodyPlacementTemplate placementTemplate;
    public UpdateProjectRequestBody withPlacementTemplate(UpdateProjectRequestBodyPlacementTemplate placementTemplate) {
        this.placementTemplate = placementTemplate;
        return this;
    }
}