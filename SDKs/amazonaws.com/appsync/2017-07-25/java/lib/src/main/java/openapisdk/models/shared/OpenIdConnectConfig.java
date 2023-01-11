package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OpenIdConnectConfig
 * Describes an OpenID Connect configuration.
**/
public class OpenIdConnectConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authTTL")
    public Long authTTL;
    public OpenIdConnectConfig withAuthTtl(Long authTTL) {
        this.authTTL = authTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public OpenIdConnectConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iatTTL")
    public Long iatTTL;
    public OpenIdConnectConfig withIatTtl(Long iatTTL) {
        this.iatTTL = iatTTL;
        return this;
    }
    @JsonProperty("issuer")
    public String issuer;
    public OpenIdConnectConfig withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
}