package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSamplingRulesRequest {
    public GetSamplingRulesQueryParams queryParams;
    public GetSamplingRulesRequest withQueryParams(GetSamplingRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSamplingRulesHeaders headers;
    public GetSamplingRulesRequest withHeaders(GetSamplingRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetSamplingRulesRequestBody request;
    public GetSamplingRulesRequest withRequest(GetSamplingRulesRequestBody request) {
        this.request = request;
        return this;
    }
}