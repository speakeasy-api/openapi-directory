package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public java.util.Map<String, Object> appId;
    public CreateTokenResponse withAppId(java.util.Map<String, Object> appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeCode")
    public java.util.Map<String, Object> challengeCode;
    public CreateTokenResponse withChallengeCode(java.util.Map<String, Object> challengeCode) {
        this.challengeCode = challengeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionId")
    public java.util.Map<String, Object> sessionId;
    public CreateTokenResponse withSessionId(java.util.Map<String, Object> sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ttl")
    public java.util.Map<String, Object> ttl;
    public CreateTokenResponse withTtl(java.util.Map<String, Object> ttl) {
        this.ttl = ttl;
        return this;
    }
}