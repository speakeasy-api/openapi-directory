package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReplaceTopicRuleRequestBody {
    @JsonProperty("topicRulePayload")
    public ReplaceTopicRuleRequestBodyTopicRulePayload topicRulePayload;
    public ReplaceTopicRuleRequestBody withTopicRulePayload(ReplaceTopicRuleRequestBodyTopicRulePayload topicRulePayload) {
        this.topicRulePayload = topicRulePayload;
        return this;
    }
}