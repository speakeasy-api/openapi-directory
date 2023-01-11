package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTagsOutput
 * Amazon ML returns the following elements.
**/
public class DescribeTagsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public DescribeTagsOutput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public TaggableResourceTypeEnum resourceType;
    public DescribeTagsOutput withResourceType(TaggableResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public DescribeTagsOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}