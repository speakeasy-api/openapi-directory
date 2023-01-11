package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventsRequest {
    public ListEventsQueryParams queryParams;
    public ListEventsRequest withQueryParams(ListEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventsHeaders headers;
    public ListEventsRequest withHeaders(ListEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListEventsRequestBody request;
    public ListEventsRequest withRequest(ListEventsRequestBody request) {
        this.request = request;
        return this;
    }
}