package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGameSessionInput
 * Represents the input for a request operation.
**/
public class UpdateGameSessionInput {
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public UpdateGameSessionInput withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumPlayerSessionCount")
    public Long maximumPlayerSessionCount;
    public UpdateGameSessionInput withMaximumPlayerSessionCount(Long maximumPlayerSessionCount) {
        this.maximumPlayerSessionCount = maximumPlayerSessionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateGameSessionInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessionCreationPolicy")
    public PlayerSessionCreationPolicyEnum playerSessionCreationPolicy;
    public UpdateGameSessionInput withPlayerSessionCreationPolicy(PlayerSessionCreationPolicyEnum playerSessionCreationPolicy) {
        this.playerSessionCreationPolicy = playerSessionCreationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtectionPolicy")
    public ProtectionPolicyEnum protectionPolicy;
    public UpdateGameSessionInput withProtectionPolicy(ProtectionPolicyEnum protectionPolicy) {
        this.protectionPolicy = protectionPolicy;
        return this;
    }
}