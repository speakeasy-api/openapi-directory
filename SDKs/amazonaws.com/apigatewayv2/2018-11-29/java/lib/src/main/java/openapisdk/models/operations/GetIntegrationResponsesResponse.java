package openapisdk.models.operations;



public class GetIntegrationResponsesResponse {
    public Object badRequestException;
    public GetIntegrationResponsesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetIntegrationResponsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIntegrationResponsesResponse getIntegrationResponsesResponse;
    public GetIntegrationResponsesResponse withGetIntegrationResponsesResponse(openapisdk.models.shared.GetIntegrationResponsesResponse getIntegrationResponsesResponse) {
        this.getIntegrationResponsesResponse = getIntegrationResponsesResponse;
        return this;
    }
    public Object notFoundException;
    public GetIntegrationResponsesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetIntegrationResponsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIntegrationResponsesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}