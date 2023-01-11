package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyEndpointMessage
 * <p/>
**/
public class ModifyEndpointMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public ModifyEndpointMessage withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public ModifyEndpointMessage withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DmsTransferSettings")
    public DmsTransferSettings dmsTransferSettings;
    public ModifyEndpointMessage withDmsTransferSettings(DmsTransferSettings dmsTransferSettings) {
        this.dmsTransferSettings = dmsTransferSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocDbSettings")
    public DocDbSettings docDbSettings;
    public ModifyEndpointMessage withDocDbSettings(DocDbSettings docDbSettings) {
        this.docDbSettings = docDbSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamoDbSettings")
    public DynamoDbSettings dynamoDbSettings;
    public ModifyEndpointMessage withDynamoDbSettings(DynamoDbSettings dynamoDbSettings) {
        this.dynamoDbSettings = dynamoDbSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticsearchSettings")
    public ElasticsearchSettings elasticsearchSettings;
    public ModifyEndpointMessage withElasticsearchSettings(ElasticsearchSettings elasticsearchSettings) {
        this.elasticsearchSettings = elasticsearchSettings;
        return this;
    }
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public ModifyEndpointMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointIdentifier")
    public String endpointIdentifier;
    public ModifyEndpointMessage withEndpointIdentifier(String endpointIdentifier) {
        this.endpointIdentifier = endpointIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public ReplicationEndpointTypeValueEnum endpointType;
    public ModifyEndpointMessage withEndpointType(ReplicationEndpointTypeValueEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineName")
    public String engineName;
    public ModifyEndpointMessage withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExactSettings")
    public Boolean exactSettings;
    public ModifyEndpointMessage withExactSettings(Boolean exactSettings) {
        this.exactSettings = exactSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalTableDefinition")
    public String externalTableDefinition;
    public ModifyEndpointMessage withExternalTableDefinition(String externalTableDefinition) {
        this.externalTableDefinition = externalTableDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraConnectionAttributes")
    public String extraConnectionAttributes;
    public ModifyEndpointMessage withExtraConnectionAttributes(String extraConnectionAttributes) {
        this.extraConnectionAttributes = extraConnectionAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IBMDb2Settings")
    public IbmDb2Settings ibmDb2Settings;
    public ModifyEndpointMessage withIbmDb2Settings(IbmDb2Settings ibmDb2Settings) {
        this.ibmDb2Settings = ibmDb2Settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KafkaSettings")
    public KafkaSettings kafkaSettings;
    public ModifyEndpointMessage withKafkaSettings(KafkaSettings kafkaSettings) {
        this.kafkaSettings = kafkaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisSettings")
    public KinesisSettings kinesisSettings;
    public ModifyEndpointMessage withKinesisSettings(KinesisSettings kinesisSettings) {
        this.kinesisSettings = kinesisSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MicrosoftSQLServerSettings")
    public MicrosoftSqlServerSettings microsoftSQLServerSettings;
    public ModifyEndpointMessage withMicrosoftSqlServerSettings(MicrosoftSqlServerSettings microsoftSQLServerSettings) {
        this.microsoftSQLServerSettings = microsoftSQLServerSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MongoDbSettings")
    public MongoDbSettings mongoDbSettings;
    public ModifyEndpointMessage withMongoDbSettings(MongoDbSettings mongoDbSettings) {
        this.mongoDbSettings = mongoDbSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MySQLSettings")
    public MySqlSettings mySQLSettings;
    public ModifyEndpointMessage withMySqlSettings(MySqlSettings mySQLSettings) {
        this.mySQLSettings = mySQLSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NeptuneSettings")
    public NeptuneSettings neptuneSettings;
    public ModifyEndpointMessage withNeptuneSettings(NeptuneSettings neptuneSettings) {
        this.neptuneSettings = neptuneSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OracleSettings")
    public OracleSettings oracleSettings;
    public ModifyEndpointMessage withOracleSettings(OracleSettings oracleSettings) {
        this.oracleSettings = oracleSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public ModifyEndpointMessage withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public ModifyEndpointMessage withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostgreSQLSettings")
    public PostgreSqlSettings postgreSQLSettings;
    public ModifyEndpointMessage withPostgreSqlSettings(PostgreSqlSettings postgreSQLSettings) {
        this.postgreSQLSettings = postgreSQLSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedisSettings")
    public RedisSettings redisSettings;
    public ModifyEndpointMessage withRedisSettings(RedisSettings redisSettings) {
        this.redisSettings = redisSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftSettings")
    public RedshiftSettings redshiftSettings;
    public ModifyEndpointMessage withRedshiftSettings(RedshiftSettings redshiftSettings) {
        this.redshiftSettings = redshiftSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Settings")
    public S3Settings s3Settings;
    public ModifyEndpointMessage withS3Settings(S3Settings s3Settings) {
        this.s3Settings = s3Settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public ModifyEndpointMessage withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccessRoleArn")
    public String serviceAccessRoleArn;
    public ModifyEndpointMessage withServiceAccessRoleArn(String serviceAccessRoleArn) {
        this.serviceAccessRoleArn = serviceAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SslMode")
    public DmsSslModeValueEnum sslMode;
    public ModifyEndpointMessage withSslMode(DmsSslModeValueEnum sslMode) {
        this.sslMode = sslMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SybaseSettings")
    public SybaseSettings sybaseSettings;
    public ModifyEndpointMessage withSybaseSettings(SybaseSettings sybaseSettings) {
        this.sybaseSettings = sybaseSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public ModifyEndpointMessage withUsername(String username) {
        this.username = username;
        return this;
    }
}