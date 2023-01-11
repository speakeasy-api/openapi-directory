package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResumeGameServerGroupInput {
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public ResumeGameServerGroupInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonProperty("ResumeActions")
    public GameServerGroupActionEnum[] resumeActions;
    public ResumeGameServerGroupInput withResumeActions(GameServerGroupActionEnum[] resumeActions) {
        this.resumeActions = resumeActions;
        return this;
    }
}