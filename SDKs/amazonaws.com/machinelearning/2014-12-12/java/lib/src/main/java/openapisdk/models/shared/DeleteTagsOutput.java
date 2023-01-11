package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteTagsOutput
 * Amazon ML returns the following elements.
**/
public class DeleteTagsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public DeleteTagsOutput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public TaggableResourceTypeEnum resourceType;
    public DeleteTagsOutput withResourceType(TaggableResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}