package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Jwt
 * JWT
**/
public class Jwt {
    @JsonProperty("jwt")
    public String jwt;
    public Jwt withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}