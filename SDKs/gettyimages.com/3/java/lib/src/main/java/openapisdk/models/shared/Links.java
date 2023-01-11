package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitation")
    public String invitation;
    public Links withInvitation(String invitation) {
        this.invitation = invitation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public String share;
    public Links withShare(String share) {
        this.share = share;
        return this;
    }
}