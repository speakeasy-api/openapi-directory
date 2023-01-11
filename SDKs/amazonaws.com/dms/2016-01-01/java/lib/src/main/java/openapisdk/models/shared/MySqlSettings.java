package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MySqlSettings
 * Provides information that defines a MySQL endpoint.
**/
public class MySqlSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AfterConnectScript")
    public String afterConnectScript;
    public MySqlSettings withAfterConnectScript(String afterConnectScript) {
        this.afterConnectScript = afterConnectScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CleanSourceMetadataOnMismatch")
    public Boolean cleanSourceMetadataOnMismatch;
    public MySqlSettings withCleanSourceMetadataOnMismatch(Boolean cleanSourceMetadataOnMismatch) {
        this.cleanSourceMetadataOnMismatch = cleanSourceMetadataOnMismatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public MySqlSettings withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventsPollInterval")
    public Long eventsPollInterval;
    public MySqlSettings withEventsPollInterval(Long eventsPollInterval) {
        this.eventsPollInterval = eventsPollInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxFileSize")
    public Long maxFileSize;
    public MySqlSettings withMaxFileSize(Long maxFileSize) {
        this.maxFileSize = maxFileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelLoadThreads")
    public Long parallelLoadThreads;
    public MySqlSettings withParallelLoadThreads(Long parallelLoadThreads) {
        this.parallelLoadThreads = parallelLoadThreads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public MySqlSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public MySqlSettings withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerAccessRoleArn")
    public String secretsManagerAccessRoleArn;
    public MySqlSettings withSecretsManagerAccessRoleArn(String secretsManagerAccessRoleArn) {
        this.secretsManagerAccessRoleArn = secretsManagerAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretId")
    public String secretsManagerSecretId;
    public MySqlSettings withSecretsManagerSecretId(String secretsManagerSecretId) {
        this.secretsManagerSecretId = secretsManagerSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public MySqlSettings withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerTimezone")
    public String serverTimezone;
    public MySqlSettings withServerTimezone(String serverTimezone) {
        this.serverTimezone = serverTimezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetDbType")
    public TargetDbTypeEnum targetDbType;
    public MySqlSettings withTargetDbType(TargetDbTypeEnum targetDbType) {
        this.targetDbType = targetDbType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public MySqlSettings withUsername(String username) {
        this.username = username;
        return this;
    }
}