package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogEventsRequest {
    public GetLogEventsQueryParams queryParams;
    public GetLogEventsRequest withQueryParams(GetLogEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLogEventsHeaders headers;
    public GetLogEventsRequest withHeaders(GetLogEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLogEventsRequest request;
    public GetLogEventsRequest withRequest(openapisdk.models.shared.GetLogEventsRequest request) {
        this.request = request;
        return this;
    }
}