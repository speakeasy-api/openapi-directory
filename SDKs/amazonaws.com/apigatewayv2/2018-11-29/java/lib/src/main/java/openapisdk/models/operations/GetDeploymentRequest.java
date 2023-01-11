package openapisdk.models.operations;



public class GetDeploymentRequest {
    public GetDeploymentPathParams pathParams;
    public GetDeploymentRequest withPathParams(GetDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeploymentHeaders headers;
    public GetDeploymentRequest withHeaders(GetDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}