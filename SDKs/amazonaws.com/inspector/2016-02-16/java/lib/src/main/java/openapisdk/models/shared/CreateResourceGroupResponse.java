package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResourceGroupResponse {
    @JsonProperty("resourceGroupArn")
    public String resourceGroupArn;
    public CreateResourceGroupResponse withResourceGroupArn(String resourceGroupArn) {
        this.resourceGroupArn = resourceGroupArn;
        return this;
    }
}