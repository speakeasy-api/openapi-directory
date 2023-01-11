package openapisdk.models.operations;



public class ConnectionsRevokeRequest {
    public ConnectionsRevokePathParams pathParams;
    public ConnectionsRevokeRequest withPathParams(ConnectionsRevokePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionsRevokeQueryParams queryParams;
    public ConnectionsRevokeRequest withQueryParams(ConnectionsRevokeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}