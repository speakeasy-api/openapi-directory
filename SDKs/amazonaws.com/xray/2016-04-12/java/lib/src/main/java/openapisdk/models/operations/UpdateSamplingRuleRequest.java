package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSamplingRuleRequest {
    public UpdateSamplingRuleHeaders headers;
    public UpdateSamplingRuleRequest withHeaders(UpdateSamplingRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSamplingRuleRequestBody request;
    public UpdateSamplingRuleRequest withRequest(UpdateSamplingRuleRequestBody request) {
        this.request = request;
        return this;
    }
}