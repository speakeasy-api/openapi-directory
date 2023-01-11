package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableAddOnRequest {
    @JsonProperty("addOnType")
    public AddOnTypeEnum addOnType;
    public DisableAddOnRequest withAddOnType(AddOnTypeEnum addOnType) {
        this.addOnType = addOnType;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public DisableAddOnRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}