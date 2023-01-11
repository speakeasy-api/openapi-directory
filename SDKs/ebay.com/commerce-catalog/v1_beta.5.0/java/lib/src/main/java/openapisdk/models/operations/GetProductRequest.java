package openapisdk.models.operations;



public class GetProductRequest {
    public GetProductPathParams pathParams;
    public GetProductRequest withPathParams(GetProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProductSecurity security;
    public GetProductRequest withSecurity(GetProductSecurity security) {
        this.security = security;
        return this;
    }
}