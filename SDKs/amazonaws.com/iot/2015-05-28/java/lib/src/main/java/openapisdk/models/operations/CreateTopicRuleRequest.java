package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTopicRuleRequest {
    public CreateTopicRulePathParams pathParams;
    public CreateTopicRuleRequest withPathParams(CreateTopicRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateTopicRuleHeaders headers;
    public CreateTopicRuleRequest withHeaders(CreateTopicRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTopicRuleRequestBody request;
    public CreateTopicRuleRequest withRequest(CreateTopicRuleRequestBody request) {
        this.request = request;
        return this;
    }
}