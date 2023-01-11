package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceDefinitionVersion
 * Information about a resource definition version.
**/
public class ResourceDefinitionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public Resource[] resources;
    public ResourceDefinitionVersion withResources(Resource[] resources) {
        this.resources = resources;
        return this;
    }
}