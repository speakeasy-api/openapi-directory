package openapisdk.models.operations;



public class CreateConfigRequest {
    public CreateConfigPathParams pathParams;
    public CreateConfigRequest withPathParams(CreateConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateConfigRequests request;
    public CreateConfigRequest withRequest(CreateConfigRequests request) {
        this.request = request;
        return this;
    }
}