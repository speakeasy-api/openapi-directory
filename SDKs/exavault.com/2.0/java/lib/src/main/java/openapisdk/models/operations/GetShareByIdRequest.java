package openapisdk.models.operations;



public class GetShareByIdRequest {
    public GetShareByIdPathParams pathParams;
    public GetShareByIdRequest withPathParams(GetShareByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetShareByIdQueryParams queryParams;
    public GetShareByIdRequest withQueryParams(GetShareByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetShareByIdHeaders headers;
    public GetShareByIdRequest withHeaders(GetShareByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}