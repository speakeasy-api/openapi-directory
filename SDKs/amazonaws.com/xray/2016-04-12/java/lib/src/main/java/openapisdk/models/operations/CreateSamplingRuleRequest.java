package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSamplingRuleRequest {
    public CreateSamplingRuleHeaders headers;
    public CreateSamplingRuleRequest withHeaders(CreateSamplingRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSamplingRuleRequestBody request;
    public CreateSamplingRuleRequest withRequest(CreateSamplingRuleRequestBody request) {
        this.request = request;
        return this;
    }
}