package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public ListTagsRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}