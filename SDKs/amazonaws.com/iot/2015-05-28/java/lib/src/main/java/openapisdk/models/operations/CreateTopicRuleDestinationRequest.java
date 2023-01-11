package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTopicRuleDestinationRequest {
    public CreateTopicRuleDestinationHeaders headers;
    public CreateTopicRuleDestinationRequest withHeaders(CreateTopicRuleDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTopicRuleDestinationRequestBody request;
    public CreateTopicRuleDestinationRequest withRequest(CreateTopicRuleDestinationRequestBody request) {
        this.request = request;
        return this;
    }
}