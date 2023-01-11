package openapisdk.models.operations;



public class NetworkRequest {
    public NetworkQueryParams queryParams;
    public NetworkRequest withQueryParams(NetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NetworkSecurity security;
    public NetworkRequest withSecurity(NetworkSecurity security) {
        this.security = security;
        return this;
    }
}