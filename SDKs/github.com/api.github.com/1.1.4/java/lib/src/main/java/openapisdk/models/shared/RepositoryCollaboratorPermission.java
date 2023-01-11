package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RepositoryCollaboratorPermission
 * Repository Collaborator Permission
**/
public class RepositoryCollaboratorPermission {
    @JsonProperty("permission")
    public String permission;
    public RepositoryCollaboratorPermission withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonProperty("user")
    public RepositoryCollaboratorPermissionSimpleUser user;
    public RepositoryCollaboratorPermission withUser(RepositoryCollaboratorPermissionSimpleUser user) {
        this.user = user;
        return this;
    }
}