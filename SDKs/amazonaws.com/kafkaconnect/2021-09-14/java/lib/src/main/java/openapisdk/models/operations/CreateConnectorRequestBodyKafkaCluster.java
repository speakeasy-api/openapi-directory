package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectorRequestBodyKafkaCluster
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
public class CreateConnectorRequestBodyKafkaCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apacheKafkaCluster")
    public openapisdk.models.shared.ApacheKafkaCluster apacheKafkaCluster;
    public CreateConnectorRequestBodyKafkaCluster withApacheKafkaCluster(openapisdk.models.shared.ApacheKafkaCluster apacheKafkaCluster) {
        this.apacheKafkaCluster = apacheKafkaCluster;
        return this;
    }
}