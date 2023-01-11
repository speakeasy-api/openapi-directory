package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleSettings
 * Provides information that defines an Oracle endpoint.
**/
public class OracleSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessAlternateDirectly")
    public Boolean accessAlternateDirectly;
    public OracleSettings withAccessAlternateDirectly(Boolean accessAlternateDirectly) {
        this.accessAlternateDirectly = accessAlternateDirectly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddSupplementalLogging")
    public Boolean addSupplementalLogging;
    public OracleSettings withAddSupplementalLogging(Boolean addSupplementalLogging) {
        this.addSupplementalLogging = addSupplementalLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalArchivedLogDestId")
    public Long additionalArchivedLogDestId;
    public OracleSettings withAdditionalArchivedLogDestId(Long additionalArchivedLogDestId) {
        this.additionalArchivedLogDestId = additionalArchivedLogDestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSelectNestedTables")
    public Boolean allowSelectNestedTables;
    public OracleSettings withAllowSelectNestedTables(Boolean allowSelectNestedTables) {
        this.allowSelectNestedTables = allowSelectNestedTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchivedLogDestId")
    public Long archivedLogDestId;
    public OracleSettings withArchivedLogDestId(Long archivedLogDestId) {
        this.archivedLogDestId = archivedLogDestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchivedLogsOnly")
    public Boolean archivedLogsOnly;
    public OracleSettings withArchivedLogsOnly(Boolean archivedLogsOnly) {
        this.archivedLogsOnly = archivedLogsOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AsmPassword")
    public String asmPassword;
    public OracleSettings withAsmPassword(String asmPassword) {
        this.asmPassword = asmPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AsmServer")
    public String asmServer;
    public OracleSettings withAsmServer(String asmServer) {
        this.asmServer = asmServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AsmUser")
    public String asmUser;
    public OracleSettings withAsmUser(String asmUser) {
        this.asmUser = asmUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CharLengthSemantics")
    public CharLengthSemanticsEnum charLengthSemantics;
    public OracleSettings withCharLengthSemantics(CharLengthSemanticsEnum charLengthSemantics) {
        this.charLengthSemantics = charLengthSemantics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public OracleSettings withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectPathNoLog")
    public Boolean directPathNoLog;
    public OracleSettings withDirectPathNoLog(Boolean directPathNoLog) {
        this.directPathNoLog = directPathNoLog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectPathParallelLoad")
    public Boolean directPathParallelLoad;
    public OracleSettings withDirectPathParallelLoad(Boolean directPathParallelLoad) {
        this.directPathParallelLoad = directPathParallelLoad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableHomogenousTablespace")
    public Boolean enableHomogenousTablespace;
    public OracleSettings withEnableHomogenousTablespace(Boolean enableHomogenousTablespace) {
        this.enableHomogenousTablespace = enableHomogenousTablespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraArchivedLogDestIds")
    public Long[] extraArchivedLogDestIds;
    public OracleSettings withExtraArchivedLogDestIds(Long[] extraArchivedLogDestIds) {
        this.extraArchivedLogDestIds = extraArchivedLogDestIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailTasksOnLobTruncation")
    public Boolean failTasksOnLobTruncation;
    public OracleSettings withFailTasksOnLobTruncation(Boolean failTasksOnLobTruncation) {
        this.failTasksOnLobTruncation = failTasksOnLobTruncation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberDatatypeScale")
    public Long numberDatatypeScale;
    public OracleSettings withNumberDatatypeScale(Long numberDatatypeScale) {
        this.numberDatatypeScale = numberDatatypeScale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OraclePathPrefix")
    public String oraclePathPrefix;
    public OracleSettings withOraclePathPrefix(String oraclePathPrefix) {
        this.oraclePathPrefix = oraclePathPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelAsmReadThreads")
    public Long parallelAsmReadThreads;
    public OracleSettings withParallelAsmReadThreads(Long parallelAsmReadThreads) {
        this.parallelAsmReadThreads = parallelAsmReadThreads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public OracleSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public OracleSettings withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadAheadBlocks")
    public Long readAheadBlocks;
    public OracleSettings withReadAheadBlocks(Long readAheadBlocks) {
        this.readAheadBlocks = readAheadBlocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadTableSpaceName")
    public Boolean readTableSpaceName;
    public OracleSettings withReadTableSpaceName(Boolean readTableSpaceName) {
        this.readTableSpaceName = readTableSpaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacePathPrefix")
    public Boolean replacePathPrefix;
    public OracleSettings withReplacePathPrefix(Boolean replacePathPrefix) {
        this.replacePathPrefix = replacePathPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryInterval")
    public Long retryInterval;
    public OracleSettings withRetryInterval(Long retryInterval) {
        this.retryInterval = retryInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerAccessRoleArn")
    public String secretsManagerAccessRoleArn;
    public OracleSettings withSecretsManagerAccessRoleArn(String secretsManagerAccessRoleArn) {
        this.secretsManagerAccessRoleArn = secretsManagerAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerOracleAsmAccessRoleArn")
    public String secretsManagerOracleAsmAccessRoleArn;
    public OracleSettings withSecretsManagerOracleAsmAccessRoleArn(String secretsManagerOracleAsmAccessRoleArn) {
        this.secretsManagerOracleAsmAccessRoleArn = secretsManagerOracleAsmAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerOracleAsmSecretId")
    public String secretsManagerOracleAsmSecretId;
    public OracleSettings withSecretsManagerOracleAsmSecretId(String secretsManagerOracleAsmSecretId) {
        this.secretsManagerOracleAsmSecretId = secretsManagerOracleAsmSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretId")
    public String secretsManagerSecretId;
    public OracleSettings withSecretsManagerSecretId(String secretsManagerSecretId) {
        this.secretsManagerSecretId = secretsManagerSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityDbEncryption")
    public String securityDbEncryption;
    public OracleSettings withSecurityDbEncryption(String securityDbEncryption) {
        this.securityDbEncryption = securityDbEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityDbEncryptionName")
    public String securityDbEncryptionName;
    public OracleSettings withSecurityDbEncryptionName(String securityDbEncryptionName) {
        this.securityDbEncryptionName = securityDbEncryptionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public OracleSettings withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpatialDataOptionToGeoJsonFunctionName")
    public String spatialDataOptionToGeoJsonFunctionName;
    public OracleSettings withSpatialDataOptionToGeoJsonFunctionName(String spatialDataOptionToGeoJsonFunctionName) {
        this.spatialDataOptionToGeoJsonFunctionName = spatialDataOptionToGeoJsonFunctionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandbyDelayTime")
    public Long standbyDelayTime;
    public OracleSettings withStandbyDelayTime(Long standbyDelayTime) {
        this.standbyDelayTime = standbyDelayTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseAlternateFolderForOnline")
    public Boolean useAlternateFolderForOnline;
    public OracleSettings withUseAlternateFolderForOnline(Boolean useAlternateFolderForOnline) {
        this.useAlternateFolderForOnline = useAlternateFolderForOnline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseBFile")
    public Boolean useBFile;
    public OracleSettings withUseBFile(Boolean useBFile) {
        this.useBFile = useBFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDirectPathFullLoad")
    public Boolean useDirectPathFullLoad;
    public OracleSettings withUseDirectPathFullLoad(Boolean useDirectPathFullLoad) {
        this.useDirectPathFullLoad = useDirectPathFullLoad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseLogminerReader")
    public Boolean useLogminerReader;
    public OracleSettings withUseLogminerReader(Boolean useLogminerReader) {
        this.useLogminerReader = useLogminerReader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsePathPrefix")
    public String usePathPrefix;
    public OracleSettings withUsePathPrefix(String usePathPrefix) {
        this.usePathPrefix = usePathPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public OracleSettings withUsername(String username) {
        this.username = username;
        return this;
    }
}