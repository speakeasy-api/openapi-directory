package openapisdk.models.operations;



public class GetAdRequest {
    public GetAdPathParams pathParams;
    public GetAdRequest withPathParams(GetAdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAdSecurity security;
    public GetAdRequest withSecurity(GetAdSecurity security) {
        this.security = security;
        return this;
    }
}