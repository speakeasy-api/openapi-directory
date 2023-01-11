package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPagesByContactRequest {
    public ListPagesByContactQueryParams queryParams;
    public ListPagesByContactRequest withQueryParams(ListPagesByContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPagesByContactHeaders headers;
    public ListPagesByContactRequest withHeaders(ListPagesByContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPagesByContactRequest request;
    public ListPagesByContactRequest withRequest(openapisdk.models.shared.ListPagesByContactRequest request) {
        this.request = request;
        return this;
    }
}