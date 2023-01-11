package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceGraphRequest {
    public GetServiceGraphQueryParams queryParams;
    public GetServiceGraphRequest withQueryParams(GetServiceGraphQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetServiceGraphHeaders headers;
    public GetServiceGraphRequest withHeaders(GetServiceGraphHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetServiceGraphRequestBody request;
    public GetServiceGraphRequest withRequest(GetServiceGraphRequestBody request) {
        this.request = request;
        return this;
    }
}