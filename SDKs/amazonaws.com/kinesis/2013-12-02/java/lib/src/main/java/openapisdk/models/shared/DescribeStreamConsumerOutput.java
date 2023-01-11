package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStreamConsumerOutput {
    @JsonProperty("ConsumerDescription")
    public ConsumerDescription consumerDescription;
    public DescribeStreamConsumerOutput withConsumerDescription(ConsumerDescription consumerDescription) {
        this.consumerDescription = consumerDescription;
        return this;
    }
}