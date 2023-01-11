package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateResourceDefinitionRequestBodyInitialVersion
 * Information about a resource definition version.
**/
public class CreateResourceDefinitionRequestBodyInitialVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public openapisdk.models.shared.Resource[] resources;
    public CreateResourceDefinitionRequestBodyInitialVersion withResources(openapisdk.models.shared.Resource[] resources) {
        this.resources = resources;
        return this;
    }
}