package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTagsRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public DescribeTagsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}