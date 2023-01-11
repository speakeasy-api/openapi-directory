package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateTagOptionWithResourceInput {
    @JsonProperty("ResourceId")
    public String resourceId;
    public AssociateTagOptionWithResourceInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("TagOptionId")
    public String tagOptionId;
    public AssociateTagOptionWithResourceInput withTagOptionId(String tagOptionId) {
        this.tagOptionId = tagOptionId;
        return this;
    }
}