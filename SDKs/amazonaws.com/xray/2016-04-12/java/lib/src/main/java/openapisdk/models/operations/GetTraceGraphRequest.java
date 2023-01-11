package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTraceGraphRequest {
    public GetTraceGraphQueryParams queryParams;
    public GetTraceGraphRequest withQueryParams(GetTraceGraphQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTraceGraphHeaders headers;
    public GetTraceGraphRequest withHeaders(GetTraceGraphHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetTraceGraphRequestBody request;
    public GetTraceGraphRequest withRequest(GetTraceGraphRequestBody request) {
        this.request = request;
        return this;
    }
}