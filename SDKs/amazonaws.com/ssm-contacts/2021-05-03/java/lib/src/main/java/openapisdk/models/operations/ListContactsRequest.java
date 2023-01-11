package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContactsRequest {
    public ListContactsQueryParams queryParams;
    public ListContactsRequest withQueryParams(ListContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContactsHeaders headers;
    public ListContactsRequest withHeaders(ListContactsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListContactsRequest request;
    public ListContactsRequest withRequest(openapisdk.models.shared.ListContactsRequest request) {
        this.request = request;
        return this;
    }
}