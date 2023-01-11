package openapisdk.models.operations;



public class DeleteRequest {
    public DeleteQueryParams queryParams;
    public DeleteRequest withQueryParams(DeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteSecurity security;
    public DeleteRequest withSecurity(DeleteSecurity security) {
        this.security = security;
        return this;
    }
}