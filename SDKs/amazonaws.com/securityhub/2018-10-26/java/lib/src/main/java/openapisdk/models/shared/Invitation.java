package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Invitation
 * Details about an invitation.
**/
public class Invitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public Invitation withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvitationId")
    public String invitationId;
    public Invitation withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("InvitedAt")
    public OffsetDateTime invitedAt;
    public Invitation withInvitedAt(OffsetDateTime invitedAt) {
        this.invitedAt = invitedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberStatus")
    public String memberStatus;
    public Invitation withMemberStatus(String memberStatus) {
        this.memberStatus = memberStatus;
        return this;
    }
}