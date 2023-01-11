package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorsRequest {
    public GetConnectorsQueryParams queryParams;
    public GetConnectorsRequest withQueryParams(GetConnectorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConnectorsHeaders headers;
    public GetConnectorsRequest withHeaders(GetConnectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetConnectorsRequest request;
    public GetConnectorsRequest withRequest(openapisdk.models.shared.GetConnectorsRequest request) {
        this.request = request;
        return this;
    }
}