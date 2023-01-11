package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MongoDbSettings
 * Provides information that defines a MongoDB endpoint.
**/
public class MongoDbSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthMechanism")
    public AuthMechanismValueEnum authMechanism;
    public MongoDbSettings withAuthMechanism(AuthMechanismValueEnum authMechanism) {
        this.authMechanism = authMechanism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthSource")
    public String authSource;
    public MongoDbSettings withAuthSource(String authSource) {
        this.authSource = authSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthType")
    public AuthTypeValueEnum authType;
    public MongoDbSettings withAuthType(AuthTypeValueEnum authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public MongoDbSettings withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocsToInvestigate")
    public String docsToInvestigate;
    public MongoDbSettings withDocsToInvestigate(String docsToInvestigate) {
        this.docsToInvestigate = docsToInvestigate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtractDocId")
    public String extractDocId;
    public MongoDbSettings withExtractDocId(String extractDocId) {
        this.extractDocId = extractDocId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public MongoDbSettings withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NestingLevel")
    public NestingLevelValueEnum nestingLevel;
    public MongoDbSettings withNestingLevel(NestingLevelValueEnum nestingLevel) {
        this.nestingLevel = nestingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public MongoDbSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public MongoDbSettings withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerAccessRoleArn")
    public String secretsManagerAccessRoleArn;
    public MongoDbSettings withSecretsManagerAccessRoleArn(String secretsManagerAccessRoleArn) {
        this.secretsManagerAccessRoleArn = secretsManagerAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretId")
    public String secretsManagerSecretId;
    public MongoDbSettings withSecretsManagerSecretId(String secretsManagerSecretId) {
        this.secretsManagerSecretId = secretsManagerSecretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public MongoDbSettings withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public MongoDbSettings withUsername(String username) {
        this.username = username;
        return this;
    }
}