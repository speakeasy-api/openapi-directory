package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public ResourceTag[] resourceTags;
    public DescribeTagsResponse withResourceTags(ResourceTag[] resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
}