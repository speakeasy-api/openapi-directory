package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterGameServerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionInfo")
    public String connectionInfo;
    public RegisterGameServerInput withConnectionInfo(String connectionInfo) {
        this.connectionInfo = connectionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerData")
    public String gameServerData;
    public RegisterGameServerInput withGameServerData(String gameServerData) {
        this.gameServerData = gameServerData;
        return this;
    }
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public RegisterGameServerInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonProperty("GameServerId")
    public String gameServerId;
    public RegisterGameServerInput withGameServerId(String gameServerId) {
        this.gameServerId = gameServerId;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public RegisterGameServerInput withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}