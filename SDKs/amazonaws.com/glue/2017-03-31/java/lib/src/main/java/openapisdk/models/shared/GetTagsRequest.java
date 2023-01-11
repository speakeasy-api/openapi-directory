package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTagsRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public GetTagsRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}