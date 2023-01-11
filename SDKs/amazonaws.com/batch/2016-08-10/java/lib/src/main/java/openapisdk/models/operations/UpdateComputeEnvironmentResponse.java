package openapisdk.models.operations;



public class UpdateComputeEnvironmentResponse {
    public Object clientException;
    public UpdateComputeEnvironmentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateComputeEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serverException;
    public UpdateComputeEnvironmentResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateComputeEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateComputeEnvironmentResponse updateComputeEnvironmentResponse;
    public UpdateComputeEnvironmentResponse withUpdateComputeEnvironmentResponse(openapisdk.models.shared.UpdateComputeEnvironmentResponse updateComputeEnvironmentResponse) {
        this.updateComputeEnvironmentResponse = updateComputeEnvironmentResponse;
        return this;
    }
}