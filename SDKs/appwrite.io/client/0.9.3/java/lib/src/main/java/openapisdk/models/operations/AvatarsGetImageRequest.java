package openapisdk.models.operations;



public class AvatarsGetImageRequest {
    public AvatarsGetImageQueryParams queryParams;
    public AvatarsGetImageRequest withQueryParams(AvatarsGetImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AvatarsGetImageSecurity security;
    public AvatarsGetImageRequest withSecurity(AvatarsGetImageSecurity security) {
        this.security = security;
        return this;
    }
}