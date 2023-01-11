package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeApplicationRequest {
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DescribeApplicationRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}