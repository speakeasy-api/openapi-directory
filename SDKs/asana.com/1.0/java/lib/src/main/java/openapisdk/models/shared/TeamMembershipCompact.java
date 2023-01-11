package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamMembershipCompact
 * This object represents a user's connection to a team.
**/
public class TeamMembershipCompact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TeamMembershipCompact withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_guest")
    public Boolean isGuest;
    public TeamMembershipCompact withIsGuest(Boolean isGuest) {
        this.isGuest = isGuest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TeamMembershipCompact withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public TeamCompact team;
    public TeamMembershipCompact withTeam(TeamCompact team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserCompact user;
    public TeamMembershipCompact withUser(UserCompact user) {
        this.user = user;
        return this;
    }
}