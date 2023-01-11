package openapisdk.models.operations;



public class CreateEnvironmentResponse {
    public String contentType;
    public CreateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateEnvironmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deploymentEnvironment;
    public CreateEnvironmentResponse withDeploymentEnvironment(java.util.Map<String, Object> deploymentEnvironment) {
        this.deploymentEnvironment = deploymentEnvironment;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreateEnvironmentResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}