package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFilterRequest {
    @JsonProperty("filterArn")
    public String filterArn;
    public DescribeFilterRequest withFilterArn(String filterArn) {
        this.filterArn = filterArn;
        return this;
    }
}