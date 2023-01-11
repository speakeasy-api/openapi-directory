package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KafkaClusterClientAuthenticationDescription
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
public class KafkaClusterClientAuthenticationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationType")
    public KafkaClusterClientAuthenticationTypeEnum authenticationType;
    public KafkaClusterClientAuthenticationDescription withAuthenticationType(KafkaClusterClientAuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
}