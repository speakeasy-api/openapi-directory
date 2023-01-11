package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTagsInput {
    @JsonProperty("ResourceId")
    public String resourceId;
    public DescribeTagsInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ResourceType")
    public TaggableResourceTypeEnum resourceType;
    public DescribeTagsInput withResourceType(TaggableResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}