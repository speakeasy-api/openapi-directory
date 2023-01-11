package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeComponentConfigurationRequest {
    @JsonProperty("ComponentName")
    public String componentName;
    public DescribeComponentConfigurationRequest withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DescribeComponentConfigurationRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}