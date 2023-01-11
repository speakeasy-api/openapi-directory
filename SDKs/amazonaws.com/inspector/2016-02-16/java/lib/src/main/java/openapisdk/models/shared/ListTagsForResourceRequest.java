package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceRequest {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public ListTagsForResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}