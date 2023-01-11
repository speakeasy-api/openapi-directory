package openapisdk.models.operations;



public class GetIntegrationResponse {
    public String contentType;
    public GetIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIntegrationResult getIntegrationResult;
    public GetIntegrationResponse withGetIntegrationResult(openapisdk.models.shared.GetIntegrationResult getIntegrationResult) {
        this.getIntegrationResult = getIntegrationResult;
        return this;
    }
    public Object notFoundException;
    public GetIntegrationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIntegrationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}