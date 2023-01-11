package openapisdk.models.operations;



public class DeleteNetworkRequest {
    public DeleteNetworkQueryParams queryParams;
    public DeleteNetworkRequest withQueryParams(DeleteNetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteNetworkSecurity security;
    public DeleteNetworkRequest withSecurity(DeleteNetworkSecurity security) {
        this.security = security;
        return this;
    }
}