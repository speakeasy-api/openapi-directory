package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTagsRequest {
    @JsonProperty("resourceArns")
    public String[] resourceArns;
    public DescribeTagsRequest withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
}