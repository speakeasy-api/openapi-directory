package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateShareInvitationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareInvitation")
    public ShareInvitation shareInvitation;
    public UpdateShareInvitationOutput withShareInvitation(ShareInvitation shareInvitation) {
        this.shareInvitation = shareInvitation;
        return this;
    }
}