package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplyArchiveRuleRequest {
    public ApplyArchiveRuleHeaders headers;
    public ApplyArchiveRuleRequest withHeaders(ApplyArchiveRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ApplyArchiveRuleRequestBody request;
    public ApplyArchiveRuleRequest withRequest(ApplyArchiveRuleRequestBody request) {
        this.request = request;
        return this;
    }
}