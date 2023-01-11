package openapisdk.models.operations;



public class AbortVaultLockRequest {
    public AbortVaultLockPathParams pathParams;
    public AbortVaultLockRequest withPathParams(AbortVaultLockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AbortVaultLockHeaders headers;
    public AbortVaultLockRequest withHeaders(AbortVaultLockHeaders headers) {
        this.headers = headers;
        return this;
    }
}