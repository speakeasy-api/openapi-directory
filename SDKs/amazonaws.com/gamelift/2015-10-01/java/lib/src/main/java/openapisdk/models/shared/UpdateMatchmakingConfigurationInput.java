package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMatchmakingConfigurationInput
 * Represents the input for a request operation.
**/
public class UpdateMatchmakingConfigurationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptanceRequired")
    public Boolean acceptanceRequired;
    public UpdateMatchmakingConfigurationInput withAcceptanceRequired(Boolean acceptanceRequired) {
        this.acceptanceRequired = acceptanceRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptanceTimeoutSeconds")
    public Long acceptanceTimeoutSeconds;
    public UpdateMatchmakingConfigurationInput withAcceptanceTimeoutSeconds(Long acceptanceTimeoutSeconds) {
        this.acceptanceTimeoutSeconds = acceptanceTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalPlayerCount")
    public Long additionalPlayerCount;
    public UpdateMatchmakingConfigurationInput withAdditionalPlayerCount(Long additionalPlayerCount) {
        this.additionalPlayerCount = additionalPlayerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackfillMode")
    public BackfillModeEnum backfillMode;
    public UpdateMatchmakingConfigurationInput withBackfillMode(BackfillModeEnum backfillMode) {
        this.backfillMode = backfillMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomEventData")
    public String customEventData;
    public UpdateMatchmakingConfigurationInput withCustomEventData(String customEventData) {
        this.customEventData = customEventData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateMatchmakingConfigurationInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FlexMatchMode")
    public FlexMatchModeEnum flexMatchMode;
    public UpdateMatchmakingConfigurationInput withFlexMatchMode(FlexMatchModeEnum flexMatchMode) {
        this.flexMatchMode = flexMatchMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameProperties")
    public GameProperty[] gameProperties;
    public UpdateMatchmakingConfigurationInput withGameProperties(GameProperty[] gameProperties) {
        this.gameProperties = gameProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionData")
    public String gameSessionData;
    public UpdateMatchmakingConfigurationInput withGameSessionData(String gameSessionData) {
        this.gameSessionData = gameSessionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionQueueArns")
    public String[] gameSessionQueueArns;
    public UpdateMatchmakingConfigurationInput withGameSessionQueueArns(String[] gameSessionQueueArns) {
        this.gameSessionQueueArns = gameSessionQueueArns;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateMatchmakingConfigurationInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationTarget")
    public String notificationTarget;
    public UpdateMatchmakingConfigurationInput withNotificationTarget(String notificationTarget) {
        this.notificationTarget = notificationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestTimeoutSeconds")
    public Long requestTimeoutSeconds;
    public UpdateMatchmakingConfigurationInput withRequestTimeoutSeconds(Long requestTimeoutSeconds) {
        this.requestTimeoutSeconds = requestTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleSetName")
    public String ruleSetName;
    public UpdateMatchmakingConfigurationInput withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
}