package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateProjectRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementTemplate")
    public CreateProjectRequestBodyPlacementTemplate placementTemplate;
    public CreateProjectRequestBody withPlacementTemplate(CreateProjectRequestBodyPlacementTemplate placementTemplate) {
        this.placementTemplate = placementTemplate;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public CreateProjectRequestBody withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateProjectRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}