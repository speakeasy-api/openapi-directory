package openapisdk.models.operations;



public class CreateDeploymentVariableResponse {
    public String contentType;
    public CreateDeploymentVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDeploymentVariableResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deploymentVariable;
    public CreateDeploymentVariableResponse withDeploymentVariable(java.util.Map<String, Object> deploymentVariable) {
        this.deploymentVariable = deploymentVariable;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreateDeploymentVariableResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}