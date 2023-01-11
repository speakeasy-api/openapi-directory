package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTopicRuleDestinationRequest {
    public UpdateTopicRuleDestinationHeaders headers;
    public UpdateTopicRuleDestinationRequest withHeaders(UpdateTopicRuleDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateTopicRuleDestinationRequestBody request;
    public UpdateTopicRuleDestinationRequest withRequest(UpdateTopicRuleDestinationRequestBody request) {
        this.request = request;
        return this;
    }
}