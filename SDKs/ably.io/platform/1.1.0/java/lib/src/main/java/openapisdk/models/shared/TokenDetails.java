package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TokenDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capability")
    public String capability;
    public TokenDetails withCapability(String capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public Long expires;
    public TokenDetails withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issued")
    public Long issued;
    public TokenDetails withIssued(Long issued) {
        this.issued = issued;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyName")
    public String keyName;
    public TokenDetails withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public TokenDetails withToken(String token) {
        this.token = token;
        return this;
    }
}