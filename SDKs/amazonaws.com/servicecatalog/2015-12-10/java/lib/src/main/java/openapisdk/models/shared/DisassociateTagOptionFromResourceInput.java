package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateTagOptionFromResourceInput {
    @JsonProperty("ResourceId")
    public String resourceId;
    public DisassociateTagOptionFromResourceInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("TagOptionId")
    public String tagOptionId;
    public DisassociateTagOptionFromResourceInput withTagOptionId(String tagOptionId) {
        this.tagOptionId = tagOptionId;
        return this;
    }
}