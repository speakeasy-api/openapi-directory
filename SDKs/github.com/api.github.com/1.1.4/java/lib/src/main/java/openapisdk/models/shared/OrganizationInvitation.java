package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInvitation
 * Organization Invitation
**/
public class OrganizationInvitation {
    @JsonProperty("created_at")
    public String createdAt;
    public OrganizationInvitation withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public OrganizationInvitation withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed_at")
    public String failedAt;
    public OrganizationInvitation withFailedAt(String failedAt) {
        this.failedAt = failedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed_reason")
    public String failedReason;
    public OrganizationInvitation withFailedReason(String failedReason) {
        this.failedReason = failedReason;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public OrganizationInvitation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("invitation_team_url")
    public String invitationTeamUrl;
    public OrganizationInvitation withInvitationTeamUrl(String invitationTeamUrl) {
        this.invitationTeamUrl = invitationTeamUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitation_teams_url")
    public String invitationTeamsUrl;
    public OrganizationInvitation withInvitationTeamsUrl(String invitationTeamsUrl) {
        this.invitationTeamsUrl = invitationTeamsUrl;
        return this;
    }
    @JsonProperty("inviter")
    public SimpleUser inviter;
    public OrganizationInvitation withInviter(SimpleUser inviter) {
        this.inviter = inviter;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public OrganizationInvitation withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public OrganizationInvitation withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public OrganizationInvitation withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("team_count")
    public Long teamCount;
    public OrganizationInvitation withTeamCount(Long teamCount) {
        this.teamCount = teamCount;
        return this;
    }
}