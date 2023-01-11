package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspaceMembershipCompact
 * This object determines if a user is a member of a workspace.
**/
public class WorkspaceMembershipCompact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public WorkspaceMembershipCompact withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public WorkspaceMembershipCompact withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserCompact user;
    public WorkspaceMembershipCompact withUser(UserCompact user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public WorkspaceCompact workspace;
    public WorkspaceMembershipCompact withWorkspace(WorkspaceCompact workspace) {
        this.workspace = workspace;
        return this;
    }
}