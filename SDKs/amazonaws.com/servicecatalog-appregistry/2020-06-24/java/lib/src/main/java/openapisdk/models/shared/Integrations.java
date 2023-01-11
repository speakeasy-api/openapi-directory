package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Integrations
 *  The information about the service integration.
**/
public class Integrations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroup")
    public ResourceGroup resourceGroup;
    public Integrations withResourceGroup(ResourceGroup resourceGroup) {
        this.resourceGroup = resourceGroup;
        return this;
    }
}