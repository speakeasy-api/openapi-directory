package openapisdk.models.operations;



public class CancelDeploymentRequest {
    public CancelDeploymentPathParams pathParams;
    public CancelDeploymentRequest withPathParams(CancelDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelDeploymentHeaders headers;
    public CancelDeploymentRequest withHeaders(CancelDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}