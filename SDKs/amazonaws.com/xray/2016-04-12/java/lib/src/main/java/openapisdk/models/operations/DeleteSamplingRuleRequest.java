package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSamplingRuleRequest {
    public DeleteSamplingRuleHeaders headers;
    public DeleteSamplingRuleRequest withHeaders(DeleteSamplingRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteSamplingRuleRequestBody request;
    public DeleteSamplingRuleRequest withRequest(DeleteSamplingRuleRequestBody request) {
        this.request = request;
        return this;
    }
}