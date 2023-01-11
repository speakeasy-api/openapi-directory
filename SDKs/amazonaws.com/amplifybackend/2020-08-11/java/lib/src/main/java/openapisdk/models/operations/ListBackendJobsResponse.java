package openapisdk.models.operations;



public class ListBackendJobsResponse {
    public Object badRequestException;
    public ListBackendJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListBackendJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public ListBackendJobsResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.ListBackendJobsResponse listBackendJobsResponse;
    public ListBackendJobsResponse withListBackendJobsResponse(openapisdk.models.shared.ListBackendJobsResponse listBackendJobsResponse) {
        this.listBackendJobsResponse = listBackendJobsResponse;
        return this;
    }
    public Object notFoundException;
    public ListBackendJobsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListBackendJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListBackendJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}