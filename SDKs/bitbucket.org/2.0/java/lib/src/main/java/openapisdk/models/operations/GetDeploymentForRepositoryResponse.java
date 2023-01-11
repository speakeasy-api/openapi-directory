package openapisdk.models.operations;



public class GetDeploymentForRepositoryResponse {
    public String contentType;
    public GetDeploymentForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeploymentForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deployment;
    public GetDeploymentForRepositoryResponse withDeployment(java.util.Map<String, Object> deployment) {
        this.deployment = deployment;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetDeploymentForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}