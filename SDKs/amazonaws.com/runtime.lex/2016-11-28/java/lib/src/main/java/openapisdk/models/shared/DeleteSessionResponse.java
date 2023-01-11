package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSessionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAlias")
    public String botAlias;
    public DeleteSessionResponse withBotAlias(String botAlias) {
        this.botAlias = botAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botName")
    public String botName;
    public DeleteSessionResponse withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public DeleteSessionResponse withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public DeleteSessionResponse withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}