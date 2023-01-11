package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTopicRuleDestinationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicRuleDestination")
    public TopicRuleDestination topicRuleDestination;
    public CreateTopicRuleDestinationResponse withTopicRuleDestination(TopicRuleDestination topicRuleDestination) {
        this.topicRuleDestination = topicRuleDestination;
        return this;
    }
}