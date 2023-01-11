package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DescribeResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}