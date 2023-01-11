package openapisdk.models.operations;



public class CreateRepositoryPipelineKnownHostResponse {
    public String contentType;
    public CreateRepositoryPipelineKnownHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateRepositoryPipelineKnownHostResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateRepositoryPipelineKnownHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreateRepositoryPipelineKnownHostResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineKnownHost;
    public CreateRepositoryPipelineKnownHostResponse withPipelineKnownHost(java.util.Map<String, Object> pipelineKnownHost) {
        this.pipelineKnownHost = pipelineKnownHost;
        return this;
    }
}