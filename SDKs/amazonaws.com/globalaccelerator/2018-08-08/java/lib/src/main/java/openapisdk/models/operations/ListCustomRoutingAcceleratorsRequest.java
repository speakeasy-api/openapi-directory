package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomRoutingAcceleratorsRequest {
    public ListCustomRoutingAcceleratorsQueryParams queryParams;
    public ListCustomRoutingAcceleratorsRequest withQueryParams(ListCustomRoutingAcceleratorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomRoutingAcceleratorsHeaders headers;
    public ListCustomRoutingAcceleratorsRequest withHeaders(ListCustomRoutingAcceleratorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCustomRoutingAcceleratorsRequest request;
    public ListCustomRoutingAcceleratorsRequest withRequest(openapisdk.models.shared.ListCustomRoutingAcceleratorsRequest request) {
        this.request = request;
        return this;
    }
}