package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EnvironmentAccountConnection
 * The environment account connection detail data.
**/
public class EnvironmentAccountConnection {
    @JsonProperty("arn")
    public String arn;
    public EnvironmentAccountConnection withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("environmentAccountId")
    public String environmentAccountId;
    public EnvironmentAccountConnection withEnvironmentAccountId(String environmentAccountId) {
        this.environmentAccountId = environmentAccountId;
        return this;
    }
    @JsonProperty("environmentName")
    public String environmentName;
    public EnvironmentAccountConnection withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EnvironmentAccountConnection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedAt")
    public OffsetDateTime lastModifiedAt;
    public EnvironmentAccountConnection withLastModifiedAt(OffsetDateTime lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
        return this;
    }
    @JsonProperty("managementAccountId")
    public String managementAccountId;
    public EnvironmentAccountConnection withManagementAccountId(String managementAccountId) {
        this.managementAccountId = managementAccountId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("requestedAt")
    public OffsetDateTime requestedAt;
    public EnvironmentAccountConnection withRequestedAt(OffsetDateTime requestedAt) {
        this.requestedAt = requestedAt;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public EnvironmentAccountConnection withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("status")
    public EnvironmentAccountConnectionStatusEnum status;
    public EnvironmentAccountConnection withStatus(EnvironmentAccountConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
}