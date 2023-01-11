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
 * Connection
 * Contains information about a connection.
**/
public class Connection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizationType")
    public ConnectionAuthorizationTypeEnum authorizationType;
    public Connection withAuthorizationType(ConnectionAuthorizationTypeEnum authorizationType) {
        this.authorizationType = authorizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public Connection withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionState")
    public ConnectionStateEnum connectionState;
    public Connection withConnectionState(ConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Connection withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAuthorizedTime")
    public OffsetDateTime lastAuthorizedTime;
    public Connection withLastAuthorizedTime(OffsetDateTime lastAuthorizedTime) {
        this.lastAuthorizedTime = lastAuthorizedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public Connection withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Connection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public Connection withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}