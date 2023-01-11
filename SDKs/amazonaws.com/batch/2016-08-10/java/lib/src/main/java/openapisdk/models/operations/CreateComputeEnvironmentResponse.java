package openapisdk.models.operations;



public class CreateComputeEnvironmentResponse {
    public Object clientException;
    public CreateComputeEnvironmentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateComputeEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateComputeEnvironmentResponse createComputeEnvironmentResponse;
    public CreateComputeEnvironmentResponse withCreateComputeEnvironmentResponse(openapisdk.models.shared.CreateComputeEnvironmentResponse createComputeEnvironmentResponse) {
        this.createComputeEnvironmentResponse = createComputeEnvironmentResponse;
        return this;
    }
    public Object serverException;
    public CreateComputeEnvironmentResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateComputeEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}