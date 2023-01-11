package openapisdk.models.operations;



public class DeleteFactRequest {
    public DeleteFactQueryParams queryParams;
    public DeleteFactRequest withQueryParams(DeleteFactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteFactSecurity security;
    public DeleteFactRequest withSecurity(DeleteFactSecurity security) {
        this.security = security;
        return this;
    }
}