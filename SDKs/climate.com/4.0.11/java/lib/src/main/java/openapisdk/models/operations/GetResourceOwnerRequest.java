package openapisdk.models.operations;



public class GetResourceOwnerRequest {
    public GetResourceOwnerPathParams pathParams;
    public GetResourceOwnerRequest withPathParams(GetResourceOwnerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetResourceOwnerSecurity security;
    public GetResourceOwnerRequest withSecurity(GetResourceOwnerSecurity security) {
        this.security = security;
        return this;
    }
}