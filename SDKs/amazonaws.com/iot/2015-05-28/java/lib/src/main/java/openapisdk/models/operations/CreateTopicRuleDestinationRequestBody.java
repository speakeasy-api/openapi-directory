package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTopicRuleDestinationRequestBody {
    @JsonProperty("destinationConfiguration")
    public CreateTopicRuleDestinationRequestBodyDestinationConfiguration destinationConfiguration;
    public CreateTopicRuleDestinationRequestBody withDestinationConfiguration(CreateTopicRuleDestinationRequestBodyDestinationConfiguration destinationConfiguration) {
        this.destinationConfiguration = destinationConfiguration;
        return this;
    }
}