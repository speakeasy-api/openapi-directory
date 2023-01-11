package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectorRequestBodyKafkaClusterClientAuthentication
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
public class CreateConnectorRequestBodyKafkaClusterClientAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationType")
    public openapisdk.models.shared.KafkaClusterClientAuthenticationTypeEnum authenticationType;
    public CreateConnectorRequestBodyKafkaClusterClientAuthentication withAuthenticationType(openapisdk.models.shared.KafkaClusterClientAuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
}