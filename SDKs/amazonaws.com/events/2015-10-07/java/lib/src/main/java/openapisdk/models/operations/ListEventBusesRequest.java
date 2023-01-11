package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventBusesRequest {
    public ListEventBusesHeaders headers;
    public ListEventBusesRequest withHeaders(ListEventBusesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEventBusesRequest request;
    public ListEventBusesRequest withRequest(openapisdk.models.shared.ListEventBusesRequest request) {
        this.request = request;
        return this;
    }
}