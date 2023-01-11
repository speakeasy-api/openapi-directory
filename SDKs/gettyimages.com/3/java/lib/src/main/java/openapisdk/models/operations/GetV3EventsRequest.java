package openapisdk.models.operations;



public class GetV3EventsRequest {
    public GetV3EventsQueryParams queryParams;
    public GetV3EventsRequest withQueryParams(GetV3EventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3EventsHeaders headers;
    public GetV3EventsRequest withHeaders(GetV3EventsHeaders headers) {
        this.headers = headers;
        return this;
    }
}