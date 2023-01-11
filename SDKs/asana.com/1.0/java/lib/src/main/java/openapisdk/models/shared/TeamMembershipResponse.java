package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamMembershipResponse
 * This object represents a user's connection to a team.
**/
public class TeamMembershipResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TeamMembershipResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_guest")
    public Boolean isGuest;
    public TeamMembershipResponse withIsGuest(Boolean isGuest) {
        this.isGuest = isGuest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TeamMembershipResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public TeamCompact team;
    public TeamMembershipResponse withTeam(TeamCompact team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserCompact user;
    public TeamMembershipResponse withUser(UserCompact user) {
        this.user = user;
        return this;
    }
}