package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupEventsRequest {
    public LookupEventsQueryParams queryParams;
    public LookupEventsRequest withQueryParams(LookupEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LookupEventsHeaders headers;
    public LookupEventsRequest withHeaders(LookupEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LookupEventsRequest request;
    public LookupEventsRequest withRequest(openapisdk.models.shared.LookupEventsRequest request) {
        this.request = request;
        return this;
    }
}