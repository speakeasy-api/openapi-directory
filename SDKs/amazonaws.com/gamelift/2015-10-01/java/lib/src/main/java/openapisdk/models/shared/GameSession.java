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
 * GameSession
 * <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSession</a> | <a>DescribeGameSessions</a> | <a>DescribeGameSessionDetails</a> | <a>SearchGameSessions</a> | <a>UpdateGameSession</a> | <a>GetGameSessionLogUrl</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
public class GameSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public GameSession withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorId")
    public String creatorId;
    public GameSession withCreatorId(String creatorId) {
        this.creatorId = creatorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentPlayerSessionCount")
    public Long currentPlayerSessionCount;
    public GameSession withCurrentPlayerSessionCount(Long currentPlayerSessionCount) {
        this.currentPlayerSessionCount = currentPlayerSessionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsName")
    public String dnsName;
    public GameSession withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public GameSession withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public GameSession withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameProperties")
    public GameProperty[] gameProperties;
    public GameSession withGameProperties(GameProperty[] gameProperties) {
        this.gameProperties = gameProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionData")
    public String gameSessionData;
    public GameSession withGameSessionData(String gameSessionData) {
        this.gameSessionData = gameSessionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public GameSession withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public GameSession withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public GameSession withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchmakerData")
    public String matchmakerData;
    public GameSession withMatchmakerData(String matchmakerData) {
        this.matchmakerData = matchmakerData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumPlayerSessionCount")
    public Long maximumPlayerSessionCount;
    public GameSession withMaximumPlayerSessionCount(Long maximumPlayerSessionCount) {
        this.maximumPlayerSessionCount = maximumPlayerSessionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GameSession withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessionCreationPolicy")
    public PlayerSessionCreationPolicyEnum playerSessionCreationPolicy;
    public GameSession withPlayerSessionCreationPolicy(PlayerSessionCreationPolicyEnum playerSessionCreationPolicy) {
        this.playerSessionCreationPolicy = playerSessionCreationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public GameSession withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public GameSessionStatusEnum status;
    public GameSession withStatus(GameSessionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public GameSessionStatusReasonEnum statusReason;
    public GameSession withStatusReason(GameSessionStatusReasonEnum statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TerminationTime")
    public OffsetDateTime terminationTime;
    public GameSession withTerminationTime(OffsetDateTime terminationTime) {
        this.terminationTime = terminationTime;
        return this;
    }
}