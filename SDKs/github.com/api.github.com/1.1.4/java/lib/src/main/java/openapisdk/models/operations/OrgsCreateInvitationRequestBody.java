package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrgsCreateInvitationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OrgsCreateInvitationRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitee_id")
    public Long inviteeId;
    public OrgsCreateInvitationRequestBody withInviteeId(Long inviteeId) {
        this.inviteeId = inviteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public OrgsCreateInvitationRequestBodyRoleEnum role;
    public OrgsCreateInvitationRequestBody withRole(OrgsCreateInvitationRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_ids")
    public Long[] teamIds;
    public OrgsCreateInvitationRequestBody withTeamIds(Long[] teamIds) {
        this.teamIds = teamIds;
        return this;
    }
}