package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTableVersionsRequest {
    public GetTableVersionsQueryParams queryParams;
    public GetTableVersionsRequest withQueryParams(GetTableVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTableVersionsHeaders headers;
    public GetTableVersionsRequest withHeaders(GetTableVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTableVersionsRequest request;
    public GetTableVersionsRequest withRequest(openapisdk.models.shared.GetTableVersionsRequest request) {
        this.request = request;
        return this;
    }
}