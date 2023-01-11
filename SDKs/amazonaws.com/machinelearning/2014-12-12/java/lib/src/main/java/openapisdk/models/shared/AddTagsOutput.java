package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddTagsOutput
 * Amazon ML returns the following elements.
**/
public class AddTagsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public AddTagsOutput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public TaggableResourceTypeEnum resourceType;
    public AddTagsOutput withResourceType(TaggableResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}