package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGraphqlApiRequestBodyOpenIdConnectConfig
 * Describes an OpenID Connect configuration.
**/
public class UpdateGraphqlApiRequestBodyOpenIdConnectConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authTTL")
    public Long authTTL;
    public UpdateGraphqlApiRequestBodyOpenIdConnectConfig withAuthTtl(Long authTTL) {
        this.authTTL = authTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public UpdateGraphqlApiRequestBodyOpenIdConnectConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iatTTL")
    public Long iatTTL;
    public UpdateGraphqlApiRequestBodyOpenIdConnectConfig withIatTtl(Long iatTTL) {
        this.iatTTL = iatTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public UpdateGraphqlApiRequestBodyOpenIdConnectConfig withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
}