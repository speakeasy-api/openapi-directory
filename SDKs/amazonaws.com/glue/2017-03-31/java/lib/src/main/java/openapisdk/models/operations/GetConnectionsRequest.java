package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectionsRequest {
    public GetConnectionsQueryParams queryParams;
    public GetConnectionsRequest withQueryParams(GetConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConnectionsHeaders headers;
    public GetConnectionsRequest withHeaders(GetConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetConnectionsRequest request;
    public GetConnectionsRequest withRequest(openapisdk.models.shared.GetConnectionsRequest request) {
        this.request = request;
        return this;
    }
}