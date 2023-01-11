package openapisdk.models.operations;



public class GetIntegrationsResponse {
    public Object badRequestException;
    public GetIntegrationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetIntegrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIntegrationsResponse getIntegrationsResponse;
    public GetIntegrationsResponse withGetIntegrationsResponse(openapisdk.models.shared.GetIntegrationsResponse getIntegrationsResponse) {
        this.getIntegrationsResponse = getIntegrationsResponse;
        return this;
    }
    public Object notFoundException;
    public GetIntegrationsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetIntegrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIntegrationsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}