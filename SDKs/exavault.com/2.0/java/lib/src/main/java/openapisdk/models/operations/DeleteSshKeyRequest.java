package openapisdk.models.operations;



public class DeleteSshKeyRequest {
    public DeleteSshKeyPathParams pathParams;
    public DeleteSshKeyRequest withPathParams(DeleteSshKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSshKeyHeaders headers;
    public DeleteSshKeyRequest withHeaders(DeleteSshKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}