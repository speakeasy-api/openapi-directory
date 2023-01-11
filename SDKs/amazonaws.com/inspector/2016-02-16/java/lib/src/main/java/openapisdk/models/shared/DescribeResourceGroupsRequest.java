package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourceGroupsRequest {
    @JsonProperty("resourceGroupArns")
    public String[] resourceGroupArns;
    public DescribeResourceGroupsRequest withResourceGroupArns(String[] resourceGroupArns) {
        this.resourceGroupArns = resourceGroupArns;
        return this;
    }
}