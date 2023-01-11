package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResourceGroupRequest {
    @JsonProperty("resourceGroupTags")
    public ResourceGroupTag[] resourceGroupTags;
    public CreateResourceGroupRequest withResourceGroupTags(ResourceGroupTag[] resourceGroupTags) {
        this.resourceGroupTags = resourceGroupTags;
        return this;
    }
}