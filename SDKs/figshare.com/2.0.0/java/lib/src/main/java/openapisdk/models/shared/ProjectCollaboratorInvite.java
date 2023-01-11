package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectCollaboratorInvite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public ProjectCollaboratorInvite withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ProjectCollaboratorInvite withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("role_name")
    public ProjectCollaboratorInviteRoleNameEnum roleName;
    public ProjectCollaboratorInvite withRoleName(ProjectCollaboratorInviteRoleNameEnum roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Long userId;
    public ProjectCollaboratorInvite withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}