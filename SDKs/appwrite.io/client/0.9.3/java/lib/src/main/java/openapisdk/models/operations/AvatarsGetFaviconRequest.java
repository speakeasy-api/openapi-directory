package openapisdk.models.operations;



public class AvatarsGetFaviconRequest {
    public AvatarsGetFaviconQueryParams queryParams;
    public AvatarsGetFaviconRequest withQueryParams(AvatarsGetFaviconQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AvatarsGetFaviconSecurity security;
    public AvatarsGetFaviconRequest withSecurity(AvatarsGetFaviconSecurity security) {
        this.security = security;
        return this;
    }
}