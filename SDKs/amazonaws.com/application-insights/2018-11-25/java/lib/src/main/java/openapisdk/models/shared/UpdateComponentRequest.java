package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateComponentRequest {
    @JsonProperty("ComponentName")
    public String componentName;
    public UpdateComponentRequest withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NewComponentName")
    public String newComponentName;
    public UpdateComponentRequest withNewComponentName(String newComponentName) {
        this.newComponentName = newComponentName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public UpdateComponentRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceList")
    public String[] resourceList;
    public UpdateComponentRequest withResourceList(String[] resourceList) {
        this.resourceList = resourceList;
        return this;
    }
}