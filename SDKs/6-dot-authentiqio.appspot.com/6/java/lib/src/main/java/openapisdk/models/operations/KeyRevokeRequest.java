package openapisdk.models.operations;



public class KeyRevokeRequest {
    public KeyRevokePathParams pathParams;
    public KeyRevokeRequest withPathParams(KeyRevokePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public KeyRevokeQueryParams queryParams;
    public KeyRevokeRequest withQueryParams(KeyRevokeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}