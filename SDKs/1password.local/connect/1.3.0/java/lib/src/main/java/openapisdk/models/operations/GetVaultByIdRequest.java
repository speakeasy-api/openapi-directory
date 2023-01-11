package openapisdk.models.operations;



public class GetVaultByIdRequest {
    public GetVaultByIdPathParams pathParams;
    public GetVaultByIdRequest withPathParams(GetVaultByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVaultByIdSecurity security;
    public GetVaultByIdRequest withSecurity(GetVaultByIdSecurity security) {
        this.security = security;
        return this;
    }
}