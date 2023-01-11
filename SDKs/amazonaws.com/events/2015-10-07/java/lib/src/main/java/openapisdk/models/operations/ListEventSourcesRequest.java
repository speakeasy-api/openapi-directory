package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventSourcesRequest {
    public ListEventSourcesHeaders headers;
    public ListEventSourcesRequest withHeaders(ListEventSourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEventSourcesRequest request;
    public ListEventSourcesRequest withRequest(openapisdk.models.shared.ListEventSourcesRequest request) {
        this.request = request;
        return this;
    }
}