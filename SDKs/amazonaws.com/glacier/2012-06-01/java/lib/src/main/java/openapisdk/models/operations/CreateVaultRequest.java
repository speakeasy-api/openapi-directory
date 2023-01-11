package openapisdk.models.operations;



public class CreateVaultRequest {
    public CreateVaultPathParams pathParams;
    public CreateVaultRequest withPathParams(CreateVaultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVaultHeaders headers;
    public CreateVaultRequest withHeaders(CreateVaultHeaders headers) {
        this.headers = headers;
        return this;
    }
}