package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RejectResourceShareInvitationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public RejectResourceShareInvitationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("resourceShareInvitationArn")
    public String resourceShareInvitationArn;
    public RejectResourceShareInvitationRequestBody withResourceShareInvitationArn(String resourceShareInvitationArn) {
        this.resourceShareInvitationArn = resourceShareInvitationArn;
        return this;
    }
}