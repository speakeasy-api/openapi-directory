package openapisdk.models.operations;



public class CreateCliTokenRequest {
    public CreateCliTokenPathParams pathParams;
    public CreateCliTokenRequest withPathParams(CreateCliTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateCliTokenHeaders headers;
    public CreateCliTokenRequest withHeaders(CreateCliTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
}