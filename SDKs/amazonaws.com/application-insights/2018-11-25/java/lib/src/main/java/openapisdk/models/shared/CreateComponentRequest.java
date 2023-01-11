package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateComponentRequest {
    @JsonProperty("ComponentName")
    public String componentName;
    public CreateComponentRequest withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public CreateComponentRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
    @JsonProperty("ResourceList")
    public String[] resourceList;
    public CreateComponentRequest withResourceList(String[] resourceList) {
        this.resourceList = resourceList;
        return this;
    }
}