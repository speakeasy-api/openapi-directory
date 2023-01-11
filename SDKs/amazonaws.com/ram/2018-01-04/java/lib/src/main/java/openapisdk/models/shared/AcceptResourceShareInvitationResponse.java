package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptResourceShareInvitationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AcceptResourceShareInvitationResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareInvitation")
    public ResourceShareInvitation resourceShareInvitation;
    public AcceptResourceShareInvitationResponse withResourceShareInvitation(ResourceShareInvitation resourceShareInvitation) {
        this.resourceShareInvitation = resourceShareInvitation;
        return this;
    }
}