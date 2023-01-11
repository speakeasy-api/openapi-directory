package openapisdk.models.operations;



public class GetV3SearchEventsRequest {
    public GetV3SearchEventsQueryParams queryParams;
    public GetV3SearchEventsRequest withQueryParams(GetV3SearchEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3SearchEventsHeaders headers;
    public GetV3SearchEventsRequest withHeaders(GetV3SearchEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
}