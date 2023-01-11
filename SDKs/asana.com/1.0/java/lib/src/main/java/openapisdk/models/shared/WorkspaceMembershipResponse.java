package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspaceMembershipResponse
 * This object determines if a user is a member of a workspace.
**/
public class WorkspaceMembershipResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public WorkspaceMembershipResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public WorkspaceMembershipResponse withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_admin")
    public Boolean isAdmin;
    public WorkspaceMembershipResponse withIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_guest")
    public Boolean isGuest;
    public WorkspaceMembershipResponse withIsGuest(Boolean isGuest) {
        this.isGuest = isGuest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public WorkspaceMembershipResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserCompact user;
    public WorkspaceMembershipResponse withUser(UserCompact user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_task_list")
    public UserTaskListResponse userTaskList;
    public WorkspaceMembershipResponse withUserTaskList(UserTaskListResponse userTaskList) {
        this.userTaskList = userTaskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public WorkspaceCompact workspace;
    public WorkspaceMembershipResponse withWorkspace(WorkspaceCompact workspace) {
        this.workspace = workspace;
        return this;
    }
}