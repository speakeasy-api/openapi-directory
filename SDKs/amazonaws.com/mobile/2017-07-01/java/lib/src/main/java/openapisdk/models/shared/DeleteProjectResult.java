package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteProjectResult
 *  Result structure used in response to request to delete a project. 
**/
public class DeleteProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedResources")
    public Resource[] deletedResources;
    public DeleteProjectResult withDeletedResources(Resource[] deletedResources) {
        this.deletedResources = deletedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orphanedResources")
    public Resource[] orphanedResources;
    public DeleteProjectResult withOrphanedResources(Resource[] orphanedResources) {
        this.orphanedResources = orphanedResources;
        return this;
    }
}