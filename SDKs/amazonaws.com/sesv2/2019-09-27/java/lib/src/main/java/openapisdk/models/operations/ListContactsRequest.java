package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContactsRequest {
    public ListContactsPathParams pathParams;
    public ListContactsRequest withPathParams(ListContactsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
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
    public ListContactsRequestBody request;
    public ListContactsRequest withRequest(ListContactsRequestBody request) {
        this.request = request;
        return this;
    }
}