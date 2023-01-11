package openapisdk.models.operations;



public class GetEmailListByIdRequest {
    public GetEmailListByIdPathParams pathParams;
    public GetEmailListByIdRequest withPathParams(GetEmailListByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEmailListByIdQueryParams queryParams;
    public GetEmailListByIdRequest withQueryParams(GetEmailListByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEmailListByIdHeaders headers;
    public GetEmailListByIdRequest withHeaders(GetEmailListByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}