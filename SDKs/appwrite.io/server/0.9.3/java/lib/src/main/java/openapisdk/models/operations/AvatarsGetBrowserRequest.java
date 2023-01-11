package openapisdk.models.operations;



public class AvatarsGetBrowserRequest {
    public AvatarsGetBrowserPathParams pathParams;
    public AvatarsGetBrowserRequest withPathParams(AvatarsGetBrowserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AvatarsGetBrowserQueryParams queryParams;
    public AvatarsGetBrowserRequest withQueryParams(AvatarsGetBrowserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AvatarsGetBrowserSecurity security;
    public AvatarsGetBrowserRequest withSecurity(AvatarsGetBrowserSecurity security) {
        this.security = security;
        return this;
    }
}