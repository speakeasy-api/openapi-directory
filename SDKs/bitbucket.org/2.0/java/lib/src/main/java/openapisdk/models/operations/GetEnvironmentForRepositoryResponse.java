package openapisdk.models.operations;



public class GetEnvironmentForRepositoryResponse {
    public String contentType;
    public GetEnvironmentForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deploymentEnvironment;
    public GetEnvironmentForRepositoryResponse withDeploymentEnvironment(java.util.Map<String, Object> deploymentEnvironment) {
        this.deploymentEnvironment = deploymentEnvironment;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetEnvironmentForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}