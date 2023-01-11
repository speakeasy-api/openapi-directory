package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddTagsInput {
    @JsonProperty("ResourceId")
    public String resourceId;
    public AddTagsInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ResourceType")
    public TaggableResourceTypeEnum resourceType;
    public AddTagsInput withResourceType(TaggableResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public AddTagsInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}