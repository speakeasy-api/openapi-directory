package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTopicRuleRequestBody {
    @JsonProperty("topicRulePayload")
    public CreateTopicRuleRequestBodyTopicRulePayload topicRulePayload;
    public CreateTopicRuleRequestBody withTopicRulePayload(CreateTopicRuleRequestBodyTopicRulePayload topicRulePayload) {
        this.topicRulePayload = topicRulePayload;
        return this;
    }
}