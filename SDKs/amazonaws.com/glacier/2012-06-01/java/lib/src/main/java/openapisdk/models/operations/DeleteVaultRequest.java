package openapisdk.models.operations;



public class DeleteVaultRequest {
    public DeleteVaultPathParams pathParams;
    public DeleteVaultRequest withPathParams(DeleteVaultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVaultHeaders headers;
    public DeleteVaultRequest withHeaders(DeleteVaultHeaders headers) {
        this.headers = headers;
        return this;
    }
}