package openapisdk.models.operations;



public class AvatarsGetInitialsRequest {
    public AvatarsGetInitialsQueryParams queryParams;
    public AvatarsGetInitialsRequest withQueryParams(AvatarsGetInitialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AvatarsGetInitialsSecurity security;
    public AvatarsGetInitialsRequest withSecurity(AvatarsGetInitialsSecurity security) {
        this.security = security;
        return this;
    }
}