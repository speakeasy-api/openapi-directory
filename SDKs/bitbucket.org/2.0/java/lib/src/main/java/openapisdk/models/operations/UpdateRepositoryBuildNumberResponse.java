package openapisdk.models.operations;



public class UpdateRepositoryBuildNumberResponse {
    public String contentType;
    public UpdateRepositoryBuildNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRepositoryBuildNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdateRepositoryBuildNumberResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineBuildNumber;
    public UpdateRepositoryBuildNumberResponse withPipelineBuildNumber(java.util.Map<String, Object> pipelineBuildNumber) {
        this.pipelineBuildNumber = pipelineBuildNumber;
        return this;
    }
}