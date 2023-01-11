package openapisdk.models.operations;



public class GetIntegrationResponseResponse {
    public String contentType;
    public GetIntegrationResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIntegrationResponseResponse getIntegrationResponseResponse;
    public GetIntegrationResponseResponse withGetIntegrationResponseResponse(openapisdk.models.shared.GetIntegrationResponseResponse getIntegrationResponseResponse) {
        this.getIntegrationResponseResponse = getIntegrationResponseResponse;
        return this;
    }
    public Object notFoundException;
    public GetIntegrationResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetIntegrationResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIntegrationResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}