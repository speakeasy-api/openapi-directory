package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthParameters")
    public ConnectionAuthResponseParameters authParameters;
    public DescribeConnectionResponse withAuthParameters(ConnectionAuthResponseParameters authParameters) {
        this.authParameters = authParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizationType")
    public ConnectionAuthorizationTypeEnum authorizationType;
    public DescribeConnectionResponse withAuthorizationType(ConnectionAuthorizationTypeEnum authorizationType) {
        this.authorizationType = authorizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public DescribeConnectionResponse withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionState")
    public ConnectionStateEnum connectionState;
    public DescribeConnectionResponse withConnectionState(ConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeConnectionResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public DescribeConnectionResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAuthorizedTime")
    public OffsetDateTime lastAuthorizedTime;
    public DescribeConnectionResponse withLastAuthorizedTime(OffsetDateTime lastAuthorizedTime) {
        this.lastAuthorizedTime = lastAuthorizedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public DescribeConnectionResponse withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeConnectionResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public DescribeConnectionResponse withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public DescribeConnectionResponse withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}