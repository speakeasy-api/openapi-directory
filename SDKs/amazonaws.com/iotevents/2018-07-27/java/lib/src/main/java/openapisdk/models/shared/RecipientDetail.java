package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecipientDetail
 * The information that identifies the recipient.
**/
public class RecipientDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssoIdentity")
    public SsoIdentity ssoIdentity;
    public RecipientDetail withSsoIdentity(SsoIdentity ssoIdentity) {
        this.ssoIdentity = ssoIdentity;
        return this;
    }
}