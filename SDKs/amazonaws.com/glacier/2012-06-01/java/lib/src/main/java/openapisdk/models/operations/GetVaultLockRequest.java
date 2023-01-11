package openapisdk.models.operations;



public class GetVaultLockRequest {
    public GetVaultLockPathParams pathParams;
    public GetVaultLockRequest withPathParams(GetVaultLockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVaultLockHeaders headers;
    public GetVaultLockRequest withHeaders(GetVaultLockHeaders headers) {
        this.headers = headers;
        return this;
    }
}