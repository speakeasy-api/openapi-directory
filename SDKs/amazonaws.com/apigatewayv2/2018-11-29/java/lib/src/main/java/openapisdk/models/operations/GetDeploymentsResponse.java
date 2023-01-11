package openapisdk.models.operations;



public class GetDeploymentsResponse {
    public Object badRequestException;
    public GetDeploymentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentsResponse getDeploymentsResponse;
    public GetDeploymentsResponse withGetDeploymentsResponse(openapisdk.models.shared.GetDeploymentsResponse getDeploymentsResponse) {
        this.getDeploymentsResponse = getDeploymentsResponse;
        return this;
    }
    public Object notFoundException;
    public GetDeploymentsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDeploymentsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}