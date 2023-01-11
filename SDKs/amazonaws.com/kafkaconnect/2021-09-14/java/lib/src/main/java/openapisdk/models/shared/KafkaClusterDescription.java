package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KafkaClusterDescription
 * Details of how to connect to the Apache Kafka cluster.
**/
public class KafkaClusterDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apacheKafkaCluster")
    public ApacheKafkaClusterDescription apacheKafkaCluster;
    public KafkaClusterDescription withApacheKafkaCluster(ApacheKafkaClusterDescription apacheKafkaCluster) {
        this.apacheKafkaCluster = apacheKafkaCluster;
        return this;
    }
}