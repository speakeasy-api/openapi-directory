package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGraphqlApiRequestBodyOpenIdConnectConfig
 * Describes an OpenID Connect configuration.
**/
public class CreateGraphqlApiRequestBodyOpenIdConnectConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authTTL")
    public Long authTTL;
    public CreateGraphqlApiRequestBodyOpenIdConnectConfig withAuthTtl(Long authTTL) {
        this.authTTL = authTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public CreateGraphqlApiRequestBodyOpenIdConnectConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iatTTL")
    public Long iatTTL;
    public CreateGraphqlApiRequestBodyOpenIdConnectConfig withIatTtl(Long iatTTL) {
        this.iatTTL = iatTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public CreateGraphqlApiRequestBodyOpenIdConnectConfig withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
}