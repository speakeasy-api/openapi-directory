package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterLogEventsRequest {
    public FilterLogEventsQueryParams queryParams;
    public FilterLogEventsRequest withQueryParams(FilterLogEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FilterLogEventsHeaders headers;
    public FilterLogEventsRequest withHeaders(FilterLogEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FilterLogEventsRequest request;
    public FilterLogEventsRequest withRequest(openapisdk.models.shared.FilterLogEventsRequest request) {
        this.request = request;
        return this;
    }
}