package openapisdk.models.operations;



public class GetTimelineEventRequest {
    public GetTimelineEventQueryParams queryParams;
    public GetTimelineEventRequest withQueryParams(GetTimelineEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTimelineEventHeaders headers;
    public GetTimelineEventRequest withHeaders(GetTimelineEventHeaders headers) {
        this.headers = headers;
        return this;
    }
}