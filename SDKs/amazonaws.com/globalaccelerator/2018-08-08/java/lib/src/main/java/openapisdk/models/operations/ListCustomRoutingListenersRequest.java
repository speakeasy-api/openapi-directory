package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomRoutingListenersRequest {
    public ListCustomRoutingListenersQueryParams queryParams;
    public ListCustomRoutingListenersRequest withQueryParams(ListCustomRoutingListenersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomRoutingListenersHeaders headers;
    public ListCustomRoutingListenersRequest withHeaders(ListCustomRoutingListenersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCustomRoutingListenersRequest request;
    public ListCustomRoutingListenersRequest withRequest(openapisdk.models.shared.ListCustomRoutingListenersRequest request) {
        this.request = request;
        return this;
    }
}