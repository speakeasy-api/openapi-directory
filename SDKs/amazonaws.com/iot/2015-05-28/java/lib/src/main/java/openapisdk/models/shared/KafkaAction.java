package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KafkaAction
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
**/
public class KafkaAction {
    @JsonProperty("clientProperties")
    public java.util.Map<String, String> clientProperties;
    public KafkaAction withClientProperties(java.util.Map<String, String> clientProperties) {
        this.clientProperties = clientProperties;
        return this;
    }
    @JsonProperty("destinationArn")
    public String destinationArn;
    public KafkaAction withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public KafkaAction withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partition")
    public String partition;
    public KafkaAction withPartition(String partition) {
        this.partition = partition;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public KafkaAction withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}