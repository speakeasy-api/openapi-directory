package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteComponentRequest {
    @JsonProperty("ComponentName")
    public String componentName;
    public DeleteComponentRequest withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DeleteComponentRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}