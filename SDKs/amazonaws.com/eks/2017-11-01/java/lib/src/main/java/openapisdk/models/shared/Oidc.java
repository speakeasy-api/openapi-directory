package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Oidc
 * An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster.
**/
public class Oidc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public Oidc withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
}