package openapisdk.models.operations;



public class DeleteComputeEnvironmentResponse {
    public Object clientException;
    public DeleteComputeEnvironmentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteComputeEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteComputeEnvironmentResponse;
    public DeleteComputeEnvironmentResponse withDeleteComputeEnvironmentResponse(java.util.Map<String, Object> deleteComputeEnvironmentResponse) {
        this.deleteComputeEnvironmentResponse = deleteComputeEnvironmentResponse;
        return this;
    }
    public Object serverException;
    public DeleteComputeEnvironmentResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteComputeEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}