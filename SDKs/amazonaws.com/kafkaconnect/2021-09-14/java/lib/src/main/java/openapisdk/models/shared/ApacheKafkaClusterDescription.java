package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApacheKafkaClusterDescription
 * The description of the Apache Kafka cluster to which the connector is connected.
**/
public class ApacheKafkaClusterDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootstrapServers")
    public String bootstrapServers;
    public ApacheKafkaClusterDescription withBootstrapServers(String bootstrapServers) {
        this.bootstrapServers = bootstrapServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc")
    public VpcDescription vpc;
    public ApacheKafkaClusterDescription withVpc(VpcDescription vpc) {
        this.vpc = vpc;
        return this;
    }
}