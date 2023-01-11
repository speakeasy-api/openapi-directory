package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IbmDb2Settings
 * Provides information that defines an IBM Db2 LUW endpoint.
**/
public class IbmDb2Settings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentLsn")
    public String currentLsn;
    public IbmDb2Settings withCurrentLsn(String currentLsn) {
        this.currentLsn = currentLsn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public IbmDb2Settings withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxKBytesPerRead")
    public Long maxKBytesPerRead;
    public IbmDb2Settings withMaxKBytesPerRead(Long maxKBytesPerRead) {
        this.maxKBytesPerRead = maxKBytesPerRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public IbmDb2Settings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public IbmDb2Settings withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerAccessRoleArn")
    public String secretsManagerAccessRoleArn;
    public IbmDb2Settings withSecretsManagerAccessRoleArn(String secretsManagerAccessRoleArn) {
        this.secretsManagerAccessRoleArn = secretsManagerAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretId")
    public String secretsManagerSecretId;
    public IbmDb2Settings withSecretsManagerSecretId(String secretsManagerSecretId) {
        this.secretsManagerSecretId = secretsManagerSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public IbmDb2Settings withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SetDataCaptureChanges")
    public Boolean setDataCaptureChanges;
    public IbmDb2Settings withSetDataCaptureChanges(Boolean setDataCaptureChanges) {
        this.setDataCaptureChanges = setDataCaptureChanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public IbmDb2Settings withUsername(String username) {
        this.username = username;
        return this;
    }
}