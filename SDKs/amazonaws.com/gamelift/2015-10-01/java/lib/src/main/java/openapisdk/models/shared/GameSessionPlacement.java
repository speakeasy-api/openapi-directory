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
 * GameSessionPlacement
 * <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
**/
public class GameSessionPlacement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsName")
    public String dnsName;
    public GameSessionPlacement withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public GameSessionPlacement withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameProperties")
    public GameProperty[] gameProperties;
    public GameSessionPlacement withGameProperties(GameProperty[] gameProperties) {
        this.gameProperties = gameProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionArn")
    public String gameSessionArn;
    public GameSessionPlacement withGameSessionArn(String gameSessionArn) {
        this.gameSessionArn = gameSessionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionData")
    public String gameSessionData;
    public GameSessionPlacement withGameSessionData(String gameSessionData) {
        this.gameSessionData = gameSessionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public GameSessionPlacement withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionName")
    public String gameSessionName;
    public GameSessionPlacement withGameSessionName(String gameSessionName) {
        this.gameSessionName = gameSessionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionQueueName")
    public String gameSessionQueueName;
    public GameSessionPlacement withGameSessionQueueName(String gameSessionQueueName) {
        this.gameSessionQueueName = gameSessionQueueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionRegion")
    public String gameSessionRegion;
    public GameSessionPlacement withGameSessionRegion(String gameSessionRegion) {
        this.gameSessionRegion = gameSessionRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public GameSessionPlacement withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchmakerData")
    public String matchmakerData;
    public GameSessionPlacement withMatchmakerData(String matchmakerData) {
        this.matchmakerData = matchmakerData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumPlayerSessionCount")
    public Long maximumPlayerSessionCount;
    public GameSessionPlacement withMaximumPlayerSessionCount(Long maximumPlayerSessionCount) {
        this.maximumPlayerSessionCount = maximumPlayerSessionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlacedPlayerSessions")
    public PlacedPlayerSession[] placedPlayerSessions;
    public GameSessionPlacement withPlacedPlayerSessions(PlacedPlayerSession[] placedPlayerSessions) {
        this.placedPlayerSessions = placedPlayerSessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlacementId")
    public String placementId;
    public GameSessionPlacement withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerLatencies")
    public PlayerLatency[] playerLatencies;
    public GameSessionPlacement withPlayerLatencies(PlayerLatency[] playerLatencies) {
        this.playerLatencies = playerLatencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public GameSessionPlacement withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public GameSessionPlacement withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public GameSessionPlacementStateEnum status;
    public GameSessionPlacement withStatus(GameSessionPlacementStateEnum status) {
        this.status = status;
        return this;
    }
}