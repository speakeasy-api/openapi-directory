package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNamespacesRequest {
    public ListNamespacesQueryParams queryParams;
    public ListNamespacesRequest withQueryParams(ListNamespacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNamespacesHeaders headers;
    public ListNamespacesRequest withHeaders(ListNamespacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListNamespacesRequest request;
    public ListNamespacesRequest withRequest(openapisdk.models.shared.ListNamespacesRequest request) {
        this.request = request;
        return this;
    }
}