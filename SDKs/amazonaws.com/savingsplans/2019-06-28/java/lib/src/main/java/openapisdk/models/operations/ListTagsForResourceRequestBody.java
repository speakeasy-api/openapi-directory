package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceRequestBody {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public ListTagsForResourceRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}