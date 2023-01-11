package openapisdk.models.operations;



public class FetchBoundaryByIdRequest {
    public FetchBoundaryByIdPathParams pathParams;
    public FetchBoundaryByIdRequest withPathParams(FetchBoundaryByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBoundaryByIdSecurity security;
    public FetchBoundaryByIdRequest withSecurity(FetchBoundaryByIdSecurity security) {
        this.security = security;
        return this;
    }
}