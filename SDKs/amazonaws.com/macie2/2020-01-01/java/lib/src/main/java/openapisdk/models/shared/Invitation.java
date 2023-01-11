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
 * Provides information about an Amazon Macie membership invitation that was received by an account.
**/
public class Invitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Invitation withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationId")
    public String invitationId;
    public Invitation withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("invitedAt")
    public OffsetDateTime invitedAt;
    public Invitation withInvitedAt(OffsetDateTime invitedAt) {
        this.invitedAt = invitedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipStatus")
    public RelationshipStatusEnum relationshipStatus;
    public Invitation withRelationshipStatus(RelationshipStatusEnum relationshipStatus) {
        this.relationshipStatus = relationshipStatus;
        return this;
    }
}