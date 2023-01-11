package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public java.util.Map<String, Object> appId;
    public GetTokenResponse withAppId(java.util.Map<String, Object> appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeCode")
    public java.util.Map<String, Object> challengeCode;
    public GetTokenResponse withChallengeCode(java.util.Map<String, Object> challengeCode) {
        this.challengeCode = challengeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionId")
    public java.util.Map<String, Object> sessionId;
    public GetTokenResponse withSessionId(java.util.Map<String, Object> sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ttl")
    public java.util.Map<String, Object> ttl;
    public GetTokenResponse withTtl(java.util.Map<String, Object> ttl) {
        this.ttl = ttl;
        return this;
    }
}