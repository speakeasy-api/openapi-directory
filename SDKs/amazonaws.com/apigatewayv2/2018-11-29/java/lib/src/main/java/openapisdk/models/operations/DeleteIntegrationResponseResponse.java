package openapisdk.models.operations;



public class DeleteIntegrationResponseResponse {
    public String contentType;
    public DeleteIntegrationResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public DeleteIntegrationResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteIntegrationResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteIntegrationResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}