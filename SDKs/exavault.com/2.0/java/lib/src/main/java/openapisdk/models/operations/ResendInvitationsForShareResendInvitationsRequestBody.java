package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResendInvitationsForShareResendInvitationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipientId")
    public Integer recipientId;
    public ResendInvitationsForShareResendInvitationsRequestBody withRecipientId(Integer recipientId) {
        this.recipientId = recipientId;
        return this;
    }
}