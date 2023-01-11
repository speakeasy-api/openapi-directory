package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceIntegrations
 * The service integration information about the resource.
**/
public class ResourceIntegrations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroup")
    public ResourceGroup resourceGroup;
    public ResourceIntegrations withResourceGroup(ResourceGroup resourceGroup) {
        this.resourceGroup = resourceGroup;
        return this;
    }
}