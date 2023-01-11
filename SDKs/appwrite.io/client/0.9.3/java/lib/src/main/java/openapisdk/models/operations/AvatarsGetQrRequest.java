package openapisdk.models.operations;



public class AvatarsGetQrRequest {
    public AvatarsGetQrQueryParams queryParams;
    public AvatarsGetQrRequest withQueryParams(AvatarsGetQrQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AvatarsGetQrSecurity security;
    public AvatarsGetQrRequest withSecurity(AvatarsGetQrSecurity security) {
        this.security = security;
        return this;
    }
}