package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsAddCollaboratorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public ProjectsAddCollaboratorRequestBodyPermissionEnum permission;
    public ProjectsAddCollaboratorRequestBody withPermission(ProjectsAddCollaboratorRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}