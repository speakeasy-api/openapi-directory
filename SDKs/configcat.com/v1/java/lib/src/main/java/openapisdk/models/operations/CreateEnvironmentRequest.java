package openapisdk.models.operations;



public class CreateEnvironmentRequest {
    public CreateEnvironmentPathParams pathParams;
    public CreateEnvironmentRequest withPathParams(CreateEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateEnvironmentRequests request;
    public CreateEnvironmentRequest withRequest(CreateEnvironmentRequests request) {
        this.request = request;
        return this;
    }
}