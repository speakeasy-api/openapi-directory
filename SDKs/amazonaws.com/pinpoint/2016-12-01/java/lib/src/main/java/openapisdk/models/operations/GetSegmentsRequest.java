package openapisdk.models.operations;



public class GetSegmentsRequest {
    public GetSegmentsPathParams pathParams;
    public GetSegmentsRequest withPathParams(GetSegmentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSegmentsQueryParams queryParams;
    public GetSegmentsRequest withQueryParams(GetSegmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSegmentsHeaders headers;
    public GetSegmentsRequest withHeaders(GetSegmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}