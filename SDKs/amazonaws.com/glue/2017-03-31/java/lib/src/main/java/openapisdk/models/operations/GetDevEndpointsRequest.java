package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevEndpointsRequest {
    public GetDevEndpointsQueryParams queryParams;
    public GetDevEndpointsRequest withQueryParams(GetDevEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDevEndpointsHeaders headers;
    public GetDevEndpointsRequest withHeaders(GetDevEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDevEndpointsRequest request;
    public GetDevEndpointsRequest withRequest(openapisdk.models.shared.GetDevEndpointsRequest request) {
        this.request = request;
        return this;
    }
}