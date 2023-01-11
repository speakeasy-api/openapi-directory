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
 * WorkspaceConnectionStatus
 * Describes the connection status of a WorkSpace.
**/
public class WorkspaceConnectionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionState")
    public ConnectionStateEnum connectionState;
    public WorkspaceConnectionStatus withConnectionState(ConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ConnectionStateCheckTimestamp")
    public OffsetDateTime connectionStateCheckTimestamp;
    public WorkspaceConnectionStatus withConnectionStateCheckTimestamp(OffsetDateTime connectionStateCheckTimestamp) {
        this.connectionStateCheckTimestamp = connectionStateCheckTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastKnownUserConnectionTimestamp")
    public OffsetDateTime lastKnownUserConnectionTimestamp;
    public WorkspaceConnectionStatus withLastKnownUserConnectionTimestamp(OffsetDateTime lastKnownUserConnectionTimestamp) {
        this.lastKnownUserConnectionTimestamp = lastKnownUserConnectionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public WorkspaceConnectionStatus withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}