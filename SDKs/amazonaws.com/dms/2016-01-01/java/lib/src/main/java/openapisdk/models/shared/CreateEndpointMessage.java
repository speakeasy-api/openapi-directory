package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEndpointMessage
 * <p/>
**/
public class CreateEndpointMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public CreateEndpointMessage withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public CreateEndpointMessage withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DmsTransferSettings")
    public DmsTransferSettings dmsTransferSettings;
    public CreateEndpointMessage withDmsTransferSettings(DmsTransferSettings dmsTransferSettings) {
        this.dmsTransferSettings = dmsTransferSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocDbSettings")
    public DocDbSettings docDbSettings;
    public CreateEndpointMessage withDocDbSettings(DocDbSettings docDbSettings) {
        this.docDbSettings = docDbSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamoDbSettings")
    public DynamoDbSettings dynamoDbSettings;
    public CreateEndpointMessage withDynamoDbSettings(DynamoDbSettings dynamoDbSettings) {
        this.dynamoDbSettings = dynamoDbSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticsearchSettings")
    public ElasticsearchSettings elasticsearchSettings;
    public CreateEndpointMessage withElasticsearchSettings(ElasticsearchSettings elasticsearchSettings) {
        this.elasticsearchSettings = elasticsearchSettings;
        return this;
    }
    @JsonProperty("EndpointIdentifier")
    public String endpointIdentifier;
    public CreateEndpointMessage withEndpointIdentifier(String endpointIdentifier) {
        this.endpointIdentifier = endpointIdentifier;
        return this;
    }
    @JsonProperty("EndpointType")
    public ReplicationEndpointTypeValueEnum endpointType;
    public CreateEndpointMessage withEndpointType(ReplicationEndpointTypeValueEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonProperty("EngineName")
    public String engineName;
    public CreateEndpointMessage withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalTableDefinition")
    public String externalTableDefinition;
    public CreateEndpointMessage withExternalTableDefinition(String externalTableDefinition) {
        this.externalTableDefinition = externalTableDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraConnectionAttributes")
    public String extraConnectionAttributes;
    public CreateEndpointMessage withExtraConnectionAttributes(String extraConnectionAttributes) {
        this.extraConnectionAttributes = extraConnectionAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IBMDb2Settings")
    public IbmDb2Settings ibmDb2Settings;
    public CreateEndpointMessage withIbmDb2Settings(IbmDb2Settings ibmDb2Settings) {
        this.ibmDb2Settings = ibmDb2Settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KafkaSettings")
    public KafkaSettings kafkaSettings;
    public CreateEndpointMessage withKafkaSettings(KafkaSettings kafkaSettings) {
        this.kafkaSettings = kafkaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisSettings")
    public KinesisSettings kinesisSettings;
    public CreateEndpointMessage withKinesisSettings(KinesisSettings kinesisSettings) {
        this.kinesisSettings = kinesisSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateEndpointMessage withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MicrosoftSQLServerSettings")
    public MicrosoftSqlServerSettings microsoftSQLServerSettings;
    public CreateEndpointMessage withMicrosoftSqlServerSettings(MicrosoftSqlServerSettings microsoftSQLServerSettings) {
        this.microsoftSQLServerSettings = microsoftSQLServerSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MongoDbSettings")
    public MongoDbSettings mongoDbSettings;
    public CreateEndpointMessage withMongoDbSettings(MongoDbSettings mongoDbSettings) {
        this.mongoDbSettings = mongoDbSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MySQLSettings")
    public MySqlSettings mySQLSettings;
    public CreateEndpointMessage withMySqlSettings(MySqlSettings mySQLSettings) {
        this.mySQLSettings = mySQLSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NeptuneSettings")
    public NeptuneSettings neptuneSettings;
    public CreateEndpointMessage withNeptuneSettings(NeptuneSettings neptuneSettings) {
        this.neptuneSettings = neptuneSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OracleSettings")
    public OracleSettings oracleSettings;
    public CreateEndpointMessage withOracleSettings(OracleSettings oracleSettings) {
        this.oracleSettings = oracleSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public CreateEndpointMessage withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public CreateEndpointMessage withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostgreSQLSettings")
    public PostgreSqlSettings postgreSQLSettings;
    public CreateEndpointMessage withPostgreSqlSettings(PostgreSqlSettings postgreSQLSettings) {
        this.postgreSQLSettings = postgreSQLSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedisSettings")
    public RedisSettings redisSettings;
    public CreateEndpointMessage withRedisSettings(RedisSettings redisSettings) {
        this.redisSettings = redisSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftSettings")
    public RedshiftSettings redshiftSettings;
    public CreateEndpointMessage withRedshiftSettings(RedshiftSettings redshiftSettings) {
        this.redshiftSettings = redshiftSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdentifier")
    public String resourceIdentifier;
    public CreateEndpointMessage withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Settings")
    public S3Settings s3Settings;
    public CreateEndpointMessage withS3Settings(S3Settings s3Settings) {
        this.s3Settings = s3Settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public CreateEndpointMessage withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccessRoleArn")
    public String serviceAccessRoleArn;
    public CreateEndpointMessage withServiceAccessRoleArn(String serviceAccessRoleArn) {
        this.serviceAccessRoleArn = serviceAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SslMode")
    public DmsSslModeValueEnum sslMode;
    public CreateEndpointMessage withSslMode(DmsSslModeValueEnum sslMode) {
        this.sslMode = sslMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SybaseSettings")
    public SybaseSettings sybaseSettings;
    public CreateEndpointMessage withSybaseSettings(SybaseSettings sybaseSettings) {
        this.sybaseSettings = sybaseSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateEndpointMessage withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public CreateEndpointMessage withUsername(String username) {
        this.username = username;
        return this;
    }
}