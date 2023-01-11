package openapisdk.models.operations;



public class FetchFieldsRequest {
    public FetchFieldsQueryParams queryParams;
    public FetchFieldsRequest withQueryParams(FetchFieldsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchFieldsHeaders headers;
    public FetchFieldsRequest withHeaders(FetchFieldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FetchFieldsSecurity security;
    public FetchFieldsRequest withSecurity(FetchFieldsSecurity security) {
        this.security = security;
        return this;
    }
}