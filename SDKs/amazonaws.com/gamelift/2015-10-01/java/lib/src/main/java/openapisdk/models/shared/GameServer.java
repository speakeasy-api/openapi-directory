package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GameServer
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <p> <b>Related actions</b> </p> <p> <a>RegisterGameServer</a> | <a>ListGameServers</a> | <a>ClaimGameServer</a> | <a>DescribeGameServer</a> | <a>UpdateGameServer</a> | <a>DeregisterGameServer</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
public class GameServer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClaimStatus")
    public GameServerClaimStatusEnum claimStatus;
    public GameServer withClaimStatus(GameServerClaimStatusEnum claimStatus) {
        this.claimStatus = claimStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionInfo")
    public String connectionInfo;
    public GameServer withConnectionInfo(String connectionInfo) {
        this.connectionInfo = connectionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerData")
    public String gameServerData;
    public GameServer withGameServerData(String gameServerData) {
        this.gameServerData = gameServerData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerGroupArn")
    public String gameServerGroupArn;
    public GameServer withGameServerGroupArn(String gameServerGroupArn) {
        this.gameServerGroupArn = gameServerGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public GameServer withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerId")
    public String gameServerId;
    public GameServer withGameServerId(String gameServerId) {
        this.gameServerId = gameServerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public GameServer withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastClaimTime")
    public OffsetDateTime lastClaimTime;
    public GameServer withLastClaimTime(OffsetDateTime lastClaimTime) {
        this.lastClaimTime = lastClaimTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastHealthCheckTime")
    public OffsetDateTime lastHealthCheckTime;
    public GameServer withLastHealthCheckTime(OffsetDateTime lastHealthCheckTime) {
        this.lastHealthCheckTime = lastHealthCheckTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RegistrationTime")
    public OffsetDateTime registrationTime;
    public GameServer withRegistrationTime(OffsetDateTime registrationTime) {
        this.registrationTime = registrationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UtilizationStatus")
    public GameServerUtilizationStatusEnum utilizationStatus;
    public GameServer withUtilizationStatus(GameServerUtilizationStatusEnum utilizationStatus) {
        this.utilizationStatus = utilizationStatus;
        return this;
    }
}