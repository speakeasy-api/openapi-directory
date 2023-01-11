package openapisdk.models.operations;



public class DeleteDeploymentRequest {
    public DeleteDeploymentPathParams pathParams;
    public DeleteDeploymentRequest withPathParams(DeleteDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDeploymentHeaders headers;
    public DeleteDeploymentRequest withHeaders(DeleteDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}