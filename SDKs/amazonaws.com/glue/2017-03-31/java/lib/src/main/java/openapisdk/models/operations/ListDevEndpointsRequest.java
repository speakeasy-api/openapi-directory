package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevEndpointsRequest {
    public ListDevEndpointsQueryParams queryParams;
    public ListDevEndpointsRequest withQueryParams(ListDevEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDevEndpointsHeaders headers;
    public ListDevEndpointsRequest withHeaders(ListDevEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDevEndpointsRequest request;
    public ListDevEndpointsRequest withRequest(openapisdk.models.shared.ListDevEndpointsRequest request) {
        this.request = request;
        return this;
    }
}