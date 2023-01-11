package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAuthorizerRequestBodyJwtConfiguration
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
public class CreateAuthorizerRequestBodyJwtConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Audience")
    public java.util.Map<String, Object> audience;
    public CreateAuthorizerRequestBodyJwtConfiguration withAudience(java.util.Map<String, Object> audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Issuer")
    public java.util.Map<String, Object> issuer;
    public CreateAuthorizerRequestBodyJwtConfiguration withIssuer(java.util.Map<String, Object> issuer) {
        this.issuer = issuer;
        return this;
    }
}