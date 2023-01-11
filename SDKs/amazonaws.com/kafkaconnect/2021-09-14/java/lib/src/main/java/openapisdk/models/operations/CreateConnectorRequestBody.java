package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectorRequestBody {
    @JsonProperty("capacity")
    public CreateConnectorRequestBodyCapacity capacity;
    public CreateConnectorRequestBody withCapacity(CreateConnectorRequestBodyCapacity capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonProperty("connectorConfiguration")
    public java.util.Map<String, String> connectorConfiguration;
    public CreateConnectorRequestBody withConnectorConfiguration(java.util.Map<String, String> connectorConfiguration) {
        this.connectorConfiguration = connectorConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorDescription")
    public String connectorDescription;
    public CreateConnectorRequestBody withConnectorDescription(String connectorDescription) {
        this.connectorDescription = connectorDescription;
        return this;
    }
    @JsonProperty("connectorName")
    public String connectorName;
    public CreateConnectorRequestBody withConnectorName(String connectorName) {
        this.connectorName = connectorName;
        return this;
    }
    @JsonProperty("kafkaCluster")
    public CreateConnectorRequestBodyKafkaCluster kafkaCluster;
    public CreateConnectorRequestBody withKafkaCluster(CreateConnectorRequestBodyKafkaCluster kafkaCluster) {
        this.kafkaCluster = kafkaCluster;
        return this;
    }
    @JsonProperty("kafkaClusterClientAuthentication")
    public CreateConnectorRequestBodyKafkaClusterClientAuthentication kafkaClusterClientAuthentication;
    public CreateConnectorRequestBody withKafkaClusterClientAuthentication(CreateConnectorRequestBodyKafkaClusterClientAuthentication kafkaClusterClientAuthentication) {
        this.kafkaClusterClientAuthentication = kafkaClusterClientAuthentication;
        return this;
    }
    @JsonProperty("kafkaClusterEncryptionInTransit")
    public CreateConnectorRequestBodyKafkaClusterEncryptionInTransit kafkaClusterEncryptionInTransit;
    public CreateConnectorRequestBody withKafkaClusterEncryptionInTransit(CreateConnectorRequestBodyKafkaClusterEncryptionInTransit kafkaClusterEncryptionInTransit) {
        this.kafkaClusterEncryptionInTransit = kafkaClusterEncryptionInTransit;
        return this;
    }
    @JsonProperty("kafkaConnectVersion")
    public String kafkaConnectVersion;
    public CreateConnectorRequestBody withKafkaConnectVersion(String kafkaConnectVersion) {
        this.kafkaConnectVersion = kafkaConnectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logDelivery")
    public CreateConnectorRequestBodyLogDelivery logDelivery;
    public CreateConnectorRequestBody withLogDelivery(CreateConnectorRequestBodyLogDelivery logDelivery) {
        this.logDelivery = logDelivery;
        return this;
    }
    @JsonProperty("plugins")
    public openapisdk.models.shared.Plugin[] plugins;
    public CreateConnectorRequestBody withPlugins(openapisdk.models.shared.Plugin[] plugins) {
        this.plugins = plugins;
        return this;
    }
    @JsonProperty("serviceExecutionRoleArn")
    public String serviceExecutionRoleArn;
    public CreateConnectorRequestBody withServiceExecutionRoleArn(String serviceExecutionRoleArn) {
        this.serviceExecutionRoleArn = serviceExecutionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfiguration")
    public CreateConnectorRequestBodyWorkerConfiguration workerConfiguration;
    public CreateConnectorRequestBody withWorkerConfiguration(CreateConnectorRequestBodyWorkerConfiguration workerConfiguration) {
        this.workerConfiguration = workerConfiguration;
        return this;
    }
}