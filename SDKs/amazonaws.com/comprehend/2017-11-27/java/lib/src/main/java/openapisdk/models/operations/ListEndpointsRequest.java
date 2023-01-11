package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEndpointsRequest {
    public ListEndpointsHeaders headers;
    public ListEndpointsRequest withHeaders(ListEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEndpointsRequest request;
    public ListEndpointsRequest withRequest(openapisdk.models.shared.ListEndpointsRequest request) {
        this.request = request;
        return this;
    }
}