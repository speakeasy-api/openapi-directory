package openapisdk.models.operations;



public class DeleteDeploymentVariableResponse {
    public String contentType;
    public DeleteDeploymentVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteDeploymentVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteDeploymentVariableResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}