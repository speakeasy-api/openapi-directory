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
 * Tunnel
 * A connection between a source computer and a destination device.
**/
public class Tunnel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Tunnel withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Tunnel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConfig")
    public DestinationConfig destinationConfig;
    public Tunnel withDestinationConfig(DestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConnectionState")
    public ConnectionState destinationConnectionState;
    public Tunnel withDestinationConnectionState(ConnectionState destinationConnectionState) {
        this.destinationConnectionState = destinationConnectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public Tunnel withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceConnectionState")
    public ConnectionState sourceConnectionState;
    public Tunnel withSourceConnectionState(ConnectionState sourceConnectionState) {
        this.sourceConnectionState = sourceConnectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TunnelStatusEnum status;
    public Tunnel withStatus(TunnelStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Tunnel withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public TimeoutConfig timeoutConfig;
    public Tunnel withTimeoutConfig(TimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnelArn")
    public String tunnelArn;
    public Tunnel withTunnelArn(String tunnelArn) {
        this.tunnelArn = tunnelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnelId")
    public String tunnelId;
    public Tunnel withTunnelId(String tunnelId) {
        this.tunnelId = tunnelId;
        return this;
    }
}