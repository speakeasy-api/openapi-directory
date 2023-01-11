package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReceivedGrantsRequest {
    public ListReceivedGrantsHeaders headers;
    public ListReceivedGrantsRequest withHeaders(ListReceivedGrantsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReceivedGrantsRequest request;
    public ListReceivedGrantsRequest withRequest(openapisdk.models.shared.ListReceivedGrantsRequest request) {
        this.request = request;
        return this;
    }
}