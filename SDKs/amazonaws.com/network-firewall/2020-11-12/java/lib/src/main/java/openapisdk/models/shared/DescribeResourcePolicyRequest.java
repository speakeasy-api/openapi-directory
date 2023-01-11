package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourcePolicyRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DescribeResourcePolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}