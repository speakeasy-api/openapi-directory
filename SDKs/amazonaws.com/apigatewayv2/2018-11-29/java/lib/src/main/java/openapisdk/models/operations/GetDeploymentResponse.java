package openapisdk.models.operations;



public class GetDeploymentResponse {
    public String contentType;
    public GetDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentResponse getDeploymentResponse;
    public GetDeploymentResponse withGetDeploymentResponse(openapisdk.models.shared.GetDeploymentResponse getDeploymentResponse) {
        this.getDeploymentResponse = getDeploymentResponse;
        return this;
    }
    public Object notFoundException;
    public GetDeploymentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDeploymentResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}