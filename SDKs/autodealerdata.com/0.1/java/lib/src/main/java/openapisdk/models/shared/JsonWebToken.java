package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JsonWebToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdOn")
    public Long createdOn;
    public JsonWebToken withCreatedOn(Long createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public Long expires;
    public JsonWebToken withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public JsonWebToken withToken(String token) {
        this.token = token;
        return this;
    }
}