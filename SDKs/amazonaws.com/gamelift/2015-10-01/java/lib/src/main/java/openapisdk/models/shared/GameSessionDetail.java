package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GameSessionDetail
 * A game session's properties plus the protection policy currently in force.
**/
public class GameSessionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSession")
    public GameSession gameSession;
    public GameSessionDetail withGameSession(GameSession gameSession) {
        this.gameSession = gameSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtectionPolicy")
    public ProtectionPolicyEnum protectionPolicy;
    public GameSessionDetail withProtectionPolicy(ProtectionPolicyEnum protectionPolicy) {
        this.protectionPolicy = protectionPolicy;
        return this;
    }
}