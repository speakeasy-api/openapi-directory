package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubUserJsonWebToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdOn")
    public Long createdOn;
    public SubUserJsonWebToken withCreatedOn(Long createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public SubUserJsonWebToken withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endPoints")
    public String[] endPoints;
    public SubUserJsonWebToken withEndPoints(String[] endPoints) {
        this.endPoints = endPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public Long expires;
    public SubUserJsonWebToken withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public SubUserJsonWebToken withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public SubUserJsonWebToken withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}