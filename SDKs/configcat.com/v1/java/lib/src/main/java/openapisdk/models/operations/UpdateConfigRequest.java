package openapisdk.models.operations;



public class UpdateConfigRequest {
    public UpdateConfigPathParams pathParams;
    public UpdateConfigRequest withPathParams(UpdateConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConfigRequests request;
    public UpdateConfigRequest withRequest(UpdateConfigRequests request) {
        this.request = request;
        return this;
    }
}