package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectionsRequest {
    public ListConnectionsQueryParams queryParams;
    public ListConnectionsRequest withQueryParams(ListConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectionsHeaders headers;
    public ListConnectionsRequest withHeaders(ListConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListConnectionsInput request;
    public ListConnectionsRequest withRequest(openapisdk.models.shared.ListConnectionsInput request) {
        this.request = request;
        return this;
    }
}