package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSamplingStatisticSummariesRequest {
    public GetSamplingStatisticSummariesQueryParams queryParams;
    public GetSamplingStatisticSummariesRequest withQueryParams(GetSamplingStatisticSummariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSamplingStatisticSummariesHeaders headers;
    public GetSamplingStatisticSummariesRequest withHeaders(GetSamplingStatisticSummariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetSamplingStatisticSummariesRequestBody request;
    public GetSamplingStatisticSummariesRequest withRequest(GetSamplingStatisticSummariesRequestBody request) {
        this.request = request;
        return this;
    }
}