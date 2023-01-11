package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListListenersRequest {
    public ListListenersQueryParams queryParams;
    public ListListenersRequest withQueryParams(ListListenersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListListenersHeaders headers;
    public ListListenersRequest withHeaders(ListListenersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListListenersRequest request;
    public ListListenersRequest withRequest(openapisdk.models.shared.ListListenersRequest request) {
        this.request = request;
        return this;
    }
}