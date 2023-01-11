package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectionsRequest {
    public ListConnectionsHeaders headers;
    public ListConnectionsRequest withHeaders(ListConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListConnectionsRequest request;
    public ListConnectionsRequest withRequest(openapisdk.models.shared.ListConnectionsRequest request) {
        this.request = request;
        return this;
    }
}