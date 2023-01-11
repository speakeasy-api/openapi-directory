package openapisdk.models.operations;



public class DeleteAdRequest {
    public DeleteAdPathParams pathParams;
    public DeleteAdRequest withPathParams(DeleteAdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAdSecurity security;
    public DeleteAdRequest withSecurity(DeleteAdSecurity security) {
        this.security = security;
        return this;
    }
}