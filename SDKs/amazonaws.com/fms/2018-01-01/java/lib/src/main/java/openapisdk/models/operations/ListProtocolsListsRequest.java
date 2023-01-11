package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProtocolsListsRequest {
    public ListProtocolsListsQueryParams queryParams;
    public ListProtocolsListsRequest withQueryParams(ListProtocolsListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProtocolsListsHeaders headers;
    public ListProtocolsListsRequest withHeaders(ListProtocolsListsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProtocolsListsRequest request;
    public ListProtocolsListsRequest withRequest(openapisdk.models.shared.ListProtocolsListsRequest request) {
        this.request = request;
        return this;
    }
}