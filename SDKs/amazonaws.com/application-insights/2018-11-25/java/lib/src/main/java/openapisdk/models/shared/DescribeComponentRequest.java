package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeComponentRequest {
    @JsonProperty("ComponentName")
    public String componentName;
    public DescribeComponentRequest withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DescribeComponentRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}