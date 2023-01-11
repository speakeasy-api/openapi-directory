package openapisdk.models.operations;



public class DeleteRiddleRequest {
    public DeleteRiddleQueryParams queryParams;
    public DeleteRiddleRequest withQueryParams(DeleteRiddleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteRiddleSecurity security;
    public DeleteRiddleRequest withSecurity(DeleteRiddleSecurity security) {
        this.security = security;
        return this;
    }
}