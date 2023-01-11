package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Identity
 * An object representing an identity provider.
**/
public class Identity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidc")
    public Oidc oidc;
    public Identity withOidc(Oidc oidc) {
        this.oidc = oidc;
        return this;
    }
}