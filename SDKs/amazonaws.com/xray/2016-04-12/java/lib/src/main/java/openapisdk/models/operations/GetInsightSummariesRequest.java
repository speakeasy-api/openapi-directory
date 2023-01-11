package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInsightSummariesRequest {
    public GetInsightSummariesQueryParams queryParams;
    public GetInsightSummariesRequest withQueryParams(GetInsightSummariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInsightSummariesHeaders headers;
    public GetInsightSummariesRequest withHeaders(GetInsightSummariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetInsightSummariesRequestBody request;
    public GetInsightSummariesRequest withRequest(GetInsightSummariesRequestBody request) {
        this.request = request;
        return this;
    }
}