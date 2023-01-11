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
 * ResourceShareInvitation
 * Describes an invitation to join a resource share.
**/
public class ResourceShareInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("invitationTimestamp")
    public OffsetDateTime invitationTimestamp;
    public ResourceShareInvitation withInvitationTimestamp(OffsetDateTime invitationTimestamp) {
        this.invitationTimestamp = invitationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiverAccountId")
    public String receiverAccountId;
    public ResourceShareInvitation withReceiverAccountId(String receiverAccountId) {
        this.receiverAccountId = receiverAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiverArn")
    public String receiverArn;
    public ResourceShareInvitation withReceiverArn(String receiverArn) {
        this.receiverArn = receiverArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArn")
    public String resourceShareArn;
    public ResourceShareInvitation withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareAssociations")
    public java.util.Map<String, Object> resourceShareAssociations;
    public ResourceShareInvitation withResourceShareAssociations(java.util.Map<String, Object> resourceShareAssociations) {
        this.resourceShareAssociations = resourceShareAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareInvitationArn")
    public String resourceShareInvitationArn;
    public ResourceShareInvitation withResourceShareInvitationArn(String resourceShareInvitationArn) {
        this.resourceShareInvitationArn = resourceShareInvitationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareName")
    public String resourceShareName;
    public ResourceShareInvitation withResourceShareName(String resourceShareName) {
        this.resourceShareName = resourceShareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderAccountId")
    public String senderAccountId;
    public ResourceShareInvitation withSenderAccountId(String senderAccountId) {
        this.senderAccountId = senderAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ResourceShareInvitationStatusEnum status;
    public ResourceShareInvitation withStatus(ResourceShareInvitationStatusEnum status) {
        this.status = status;
        return this;
    }
}