package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApplicationRequest {
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DeleteApplicationRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}