package openapisdk.models.operations;



public class DeleteEnvironmentForRepositoryResponse {
    public String contentType;
    public DeleteEnvironmentForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteEnvironmentForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}