package openapisdk.models.operations;



public class GetProfileRequest {
    public GetProfilePathParams pathParams;
    public GetProfileRequest withPathParams(GetProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProfileQueryParams queryParams;
    public GetProfileRequest withQueryParams(GetProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProfileHeaders headers;
    public GetProfileRequest withHeaders(GetProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}