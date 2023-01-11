package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArchiveRuleRequest {
    public CreateArchiveRulePathParams pathParams;
    public CreateArchiveRuleRequest withPathParams(CreateArchiveRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateArchiveRuleHeaders headers;
    public CreateArchiveRuleRequest withHeaders(CreateArchiveRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateArchiveRuleRequestBody request;
    public CreateArchiveRuleRequest withRequest(CreateArchiveRuleRequestBody request) {
        this.request = request;
        return this;
    }
}