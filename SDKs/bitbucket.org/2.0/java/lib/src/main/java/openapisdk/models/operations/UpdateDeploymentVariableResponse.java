package openapisdk.models.operations;



public class UpdateDeploymentVariableResponse {
    public String contentType;
    public UpdateDeploymentVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeploymentVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deploymentVariable;
    public UpdateDeploymentVariableResponse withDeploymentVariable(java.util.Map<String, Object> deploymentVariable) {
        this.deploymentVariable = deploymentVariable;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdateDeploymentVariableResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}