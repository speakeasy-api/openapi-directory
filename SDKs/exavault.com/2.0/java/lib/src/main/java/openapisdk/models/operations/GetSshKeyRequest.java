package openapisdk.models.operations;



public class GetSshKeyRequest {
    public GetSshKeyPathParams pathParams;
    public GetSshKeyRequest withPathParams(GetSshKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSshKeyHeaders headers;
    public GetSshKeyRequest withHeaders(GetSshKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}