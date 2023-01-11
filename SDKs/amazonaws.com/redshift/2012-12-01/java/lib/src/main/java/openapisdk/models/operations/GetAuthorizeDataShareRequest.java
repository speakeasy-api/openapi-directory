package openapisdk.models.operations;



public class GetAuthorizeDataShareRequest {
    public GetAuthorizeDataShareQueryParams queryParams;
    public GetAuthorizeDataShareRequest withQueryParams(GetAuthorizeDataShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAuthorizeDataShareHeaders headers;
    public GetAuthorizeDataShareRequest withHeaders(GetAuthorizeDataShareHeaders headers) {
        this.headers = headers;
        return this;
    }
}