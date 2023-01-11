package openapisdk.models.operations;



public class GetUserByIdRequest {
    public GetUserByIdPathParams pathParams;
    public GetUserByIdRequest withPathParams(GetUserByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserByIdQueryParams queryParams;
    public GetUserByIdRequest withQueryParams(GetUserByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserByIdHeaders headers;
    public GetUserByIdRequest withHeaders(GetUserByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}