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
 * Session
 * Describes a streaming session.
**/
public class Session {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthenticationType")
    public AuthenticationTypeEnum authenticationType;
    public Session withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionState")
    public SessionConnectionStateEnum connectionState;
    public Session withConnectionState(SessionConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonProperty("FleetName")
    public String fleetName;
    public Session withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Session withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("MaxExpirationTime")
    public OffsetDateTime maxExpirationTime;
    public Session withMaxExpirationTime(OffsetDateTime maxExpirationTime) {
        this.maxExpirationTime = maxExpirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkAccessConfiguration")
    public NetworkAccessConfiguration networkAccessConfiguration;
    public Session withNetworkAccessConfiguration(NetworkAccessConfiguration networkAccessConfiguration) {
        this.networkAccessConfiguration = networkAccessConfiguration;
        return this;
    }
    @JsonProperty("StackName")
    public String stackName;
    public Session withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public Session withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("State")
    public SessionStateEnum state;
    public Session withState(SessionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public Session withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}