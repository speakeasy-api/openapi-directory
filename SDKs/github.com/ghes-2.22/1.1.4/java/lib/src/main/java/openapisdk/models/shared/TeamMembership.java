package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TeamMembership
 * Team Membership
**/
public class TeamMembership {
    @JsonProperty("role")
    public TeamMembershipRoleEnum role;
    public TeamMembership withRole(TeamMembershipRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonProperty("state")
    public TeamMembershipStateEnum state;
    public TeamMembership withState(TeamMembershipStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TeamMembership withUrl(String url) {
        this.url = url;
        return this;
    }
}