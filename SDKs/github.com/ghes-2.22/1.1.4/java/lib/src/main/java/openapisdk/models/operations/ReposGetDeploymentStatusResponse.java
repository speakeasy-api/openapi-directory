package openapisdk.models.operations;



public class ReposGetDeploymentStatusResponse {
    public String contentType;
    public ReposGetDeploymentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetDeploymentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetDeploymentStatusResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.DeploymentStatus deploymentStatus;
    public ReposGetDeploymentStatusResponse withDeploymentStatus(openapisdk.models.shared.DeploymentStatus deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    public ReposGetDeploymentStatus415ApplicationJson reposGetDeploymentStatus415ApplicationJSONObject;
    public ReposGetDeploymentStatusResponse withReposGetDeploymentStatus415ApplicationJsonObject(ReposGetDeploymentStatus415ApplicationJson reposGetDeploymentStatus415ApplicationJSONObject) {
        this.reposGetDeploymentStatus415ApplicationJSONObject = reposGetDeploymentStatus415ApplicationJSONObject;
        return this;
    }
}