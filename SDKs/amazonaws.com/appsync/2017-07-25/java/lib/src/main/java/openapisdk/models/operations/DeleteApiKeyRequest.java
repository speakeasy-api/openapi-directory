package openapisdk.models.operations;



public class DeleteApiKeyRequest {
    public DeleteApiKeyPathParams pathParams;
    public DeleteApiKeyRequest withPathParams(DeleteApiKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiKeyHeaders headers;
    public DeleteApiKeyRequest withHeaders(DeleteApiKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}