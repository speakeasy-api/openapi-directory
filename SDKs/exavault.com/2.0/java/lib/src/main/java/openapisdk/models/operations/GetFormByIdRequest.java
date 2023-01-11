package openapisdk.models.operations;



public class GetFormByIdRequest {
    public GetFormByIdPathParams pathParams;
    public GetFormByIdRequest withPathParams(GetFormByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFormByIdQueryParams queryParams;
    public GetFormByIdRequest withQueryParams(GetFormByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFormByIdHeaders headers;
    public GetFormByIdRequest withHeaders(GetFormByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}