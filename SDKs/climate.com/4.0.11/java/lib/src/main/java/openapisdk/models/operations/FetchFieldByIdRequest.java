package openapisdk.models.operations;



public class FetchFieldByIdRequest {
    public FetchFieldByIdPathParams pathParams;
    public FetchFieldByIdRequest withPathParams(FetchFieldByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFieldByIdSecurity security;
    public FetchFieldByIdRequest withSecurity(FetchFieldByIdSecurity security) {
        this.security = security;
        return this;
    }
}