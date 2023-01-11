package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGameServerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerData")
    public String gameServerData;
    public UpdateGameServerInput withGameServerData(String gameServerData) {
        this.gameServerData = gameServerData;
        return this;
    }
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public UpdateGameServerInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonProperty("GameServerId")
    public String gameServerId;
    public UpdateGameServerInput withGameServerId(String gameServerId) {
        this.gameServerId = gameServerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheck")
    public GameServerHealthCheckEnum healthCheck;
    public UpdateGameServerInput withHealthCheck(GameServerHealthCheckEnum healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UtilizationStatus")
    public GameServerUtilizationStatusEnum utilizationStatus;
    public UpdateGameServerInput withUtilizationStatus(GameServerUtilizationStatusEnum utilizationStatus) {
        this.utilizationStatus = utilizationStatus;
        return this;
    }
}