package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBlueprintRequest {
    @JsonProperty("BlueprintLocation")
    public String blueprintLocation;
    public CreateBlueprintRequest withBlueprintLocation(String blueprintLocation) {
        this.blueprintLocation = blueprintLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateBlueprintRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateBlueprintRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateBlueprintRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}