package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExpireSessionRequest {
    @JsonProperty("SessionId")
    public String sessionId;
    public ExpireSessionRequest withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}