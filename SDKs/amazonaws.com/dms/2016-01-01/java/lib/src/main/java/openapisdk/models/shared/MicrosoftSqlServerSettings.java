package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MicrosoftSqlServerSettings
 * Provides information that defines a Microsoft SQL Server endpoint.
**/
public class MicrosoftSqlServerSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BcpPacketSize")
    public Long bcpPacketSize;
    public MicrosoftSqlServerSettings withBcpPacketSize(Long bcpPacketSize) {
        this.bcpPacketSize = bcpPacketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlTablesFileGroup")
    public String controlTablesFileGroup;
    public MicrosoftSqlServerSettings withControlTablesFileGroup(String controlTablesFileGroup) {
        this.controlTablesFileGroup = controlTablesFileGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public MicrosoftSqlServerSettings withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public MicrosoftSqlServerSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public MicrosoftSqlServerSettings withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuerySingleAlwaysOnNode")
    public Boolean querySingleAlwaysOnNode;
    public MicrosoftSqlServerSettings withQuerySingleAlwaysOnNode(Boolean querySingleAlwaysOnNode) {
        this.querySingleAlwaysOnNode = querySingleAlwaysOnNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadBackupOnly")
    public Boolean readBackupOnly;
    public MicrosoftSqlServerSettings withReadBackupOnly(Boolean readBackupOnly) {
        this.readBackupOnly = readBackupOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SafeguardPolicy")
    public SafeguardPolicyEnum safeguardPolicy;
    public MicrosoftSqlServerSettings withSafeguardPolicy(SafeguardPolicyEnum safeguardPolicy) {
        this.safeguardPolicy = safeguardPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerAccessRoleArn")
    public String secretsManagerAccessRoleArn;
    public MicrosoftSqlServerSettings withSecretsManagerAccessRoleArn(String secretsManagerAccessRoleArn) {
        this.secretsManagerAccessRoleArn = secretsManagerAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretId")
    public String secretsManagerSecretId;
    public MicrosoftSqlServerSettings withSecretsManagerSecretId(String secretsManagerSecretId) {
        this.secretsManagerSecretId = secretsManagerSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public MicrosoftSqlServerSettings withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseBcpFullLoad")
    public Boolean useBcpFullLoad;
    public MicrosoftSqlServerSettings withUseBcpFullLoad(Boolean useBcpFullLoad) {
        this.useBcpFullLoad = useBcpFullLoad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseThirdPartyBackupDevice")
    public Boolean useThirdPartyBackupDevice;
    public MicrosoftSqlServerSettings withUseThirdPartyBackupDevice(Boolean useThirdPartyBackupDevice) {
        this.useThirdPartyBackupDevice = useThirdPartyBackupDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public MicrosoftSqlServerSettings withUsername(String username) {
        this.username = username;
        return this;
    }
}