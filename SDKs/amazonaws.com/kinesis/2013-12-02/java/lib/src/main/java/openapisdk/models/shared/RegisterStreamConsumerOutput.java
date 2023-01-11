package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterStreamConsumerOutput {
    @JsonProperty("Consumer")
    public Consumer consumer;
    public RegisterStreamConsumerOutput withConsumer(Consumer consumer) {
        this.consumer = consumer;
        return this;
    }
}