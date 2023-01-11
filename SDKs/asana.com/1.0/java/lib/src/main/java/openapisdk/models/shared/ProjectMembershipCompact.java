package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectMembershipCompact
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
**/
public class ProjectMembershipCompact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public ProjectMembershipCompact withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public ProjectMembershipCompact withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserCompact user;
    public ProjectMembershipCompact withUser(UserCompact user) {
        this.user = user;
        return this;
    }
}