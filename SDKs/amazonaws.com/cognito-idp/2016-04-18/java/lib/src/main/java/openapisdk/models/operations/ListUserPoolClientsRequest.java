package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserPoolClientsRequest {
    public ListUserPoolClientsQueryParams queryParams;
    public ListUserPoolClientsRequest withQueryParams(ListUserPoolClientsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUserPoolClientsHeaders headers;
    public ListUserPoolClientsRequest withHeaders(ListUserPoolClientsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUserPoolClientsRequest request;
    public ListUserPoolClientsRequest withRequest(openapisdk.models.shared.ListUserPoolClientsRequest request) {
        this.request = request;
        return this;
    }
}