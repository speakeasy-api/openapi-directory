package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KafkaClusterEncryptionInTransitDescription
 * The description of the encryption in transit to the Apache Kafka cluster.
**/
public class KafkaClusterEncryptionInTransitDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionType")
    public KafkaClusterEncryptionInTransitTypeEnum encryptionType;
    public KafkaClusterEncryptionInTransitDescription withEncryptionType(KafkaClusterEncryptionInTransitTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
}