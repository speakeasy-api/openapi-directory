package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceDelegatesRequest {
    public ListResourceDelegatesQueryParams queryParams;
    public ListResourceDelegatesRequest withQueryParams(ListResourceDelegatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceDelegatesHeaders headers;
    public ListResourceDelegatesRequest withHeaders(ListResourceDelegatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourceDelegatesRequest request;
    public ListResourceDelegatesRequest withRequest(openapisdk.models.shared.ListResourceDelegatesRequest request) {
        this.request = request;
        return this;
    }
}