package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgreSqlSettings
 * Provides information that defines a PostgreSQL endpoint.
**/
public class PostgreSqlSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AfterConnectScript")
    public String afterConnectScript;
    public PostgreSqlSettings withAfterConnectScript(String afterConnectScript) {
        this.afterConnectScript = afterConnectScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CaptureDdls")
    public Boolean captureDdls;
    public PostgreSqlSettings withCaptureDdls(Boolean captureDdls) {
        this.captureDdls = captureDdls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public PostgreSqlSettings withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DdlArtifactsSchema")
    public String ddlArtifactsSchema;
    public PostgreSqlSettings withDdlArtifactsSchema(String ddlArtifactsSchema) {
        this.ddlArtifactsSchema = ddlArtifactsSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecuteTimeout")
    public Long executeTimeout;
    public PostgreSqlSettings withExecuteTimeout(Long executeTimeout) {
        this.executeTimeout = executeTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailTasksOnLobTruncation")
    public Boolean failTasksOnLobTruncation;
    public PostgreSqlSettings withFailTasksOnLobTruncation(Boolean failTasksOnLobTruncation) {
        this.failTasksOnLobTruncation = failTasksOnLobTruncation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HeartbeatEnable")
    public Boolean heartbeatEnable;
    public PostgreSqlSettings withHeartbeatEnable(Boolean heartbeatEnable) {
        this.heartbeatEnable = heartbeatEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HeartbeatFrequency")
    public Long heartbeatFrequency;
    public PostgreSqlSettings withHeartbeatFrequency(Long heartbeatFrequency) {
        this.heartbeatFrequency = heartbeatFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HeartbeatSchema")
    public String heartbeatSchema;
    public PostgreSqlSettings withHeartbeatSchema(String heartbeatSchema) {
        this.heartbeatSchema = heartbeatSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxFileSize")
    public Long maxFileSize;
    public PostgreSqlSettings withMaxFileSize(Long maxFileSize) {
        this.maxFileSize = maxFileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public PostgreSqlSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PluginName")
    public PluginNameValueEnum pluginName;
    public PostgreSqlSettings withPluginName(PluginNameValueEnum pluginName) {
        this.pluginName = pluginName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public PostgreSqlSettings withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerAccessRoleArn")
    public String secretsManagerAccessRoleArn;
    public PostgreSqlSettings withSecretsManagerAccessRoleArn(String secretsManagerAccessRoleArn) {
        this.secretsManagerAccessRoleArn = secretsManagerAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretId")
    public String secretsManagerSecretId;
    public PostgreSqlSettings withSecretsManagerSecretId(String secretsManagerSecretId) {
        this.secretsManagerSecretId = secretsManagerSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public PostgreSqlSettings withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SlotName")
    public String slotName;
    public PostgreSqlSettings withSlotName(String slotName) {
        this.slotName = slotName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public PostgreSqlSettings withUsername(String username) {
        this.username = username;
        return this;
    }
}