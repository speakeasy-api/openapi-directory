package openapisdk.models.operations;



public class GetSegmentRequest {
    public GetSegmentPathParams pathParams;
    public GetSegmentRequest withPathParams(GetSegmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSegmentHeaders headers;
    public GetSegmentRequest withHeaders(GetSegmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}