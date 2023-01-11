package openapisdk.models.operations;



public class UpdateEnvironmentForRepositoryResponse {
    public String contentType;
    public UpdateEnvironmentForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdateEnvironmentForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}