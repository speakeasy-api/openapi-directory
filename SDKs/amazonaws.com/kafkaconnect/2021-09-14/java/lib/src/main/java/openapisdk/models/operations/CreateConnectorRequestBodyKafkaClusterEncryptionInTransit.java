package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
 * Details of encryption in transit to the Apache Kafka cluster.
**/
public class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionType")
    public openapisdk.models.shared.KafkaClusterEncryptionInTransitTypeEnum encryptionType;
    public CreateConnectorRequestBodyKafkaClusterEncryptionInTransit withEncryptionType(openapisdk.models.shared.KafkaClusterEncryptionInTransitTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
}