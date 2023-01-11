package openapisdk.models.operations;



public class PutProfileObjectResponse {
    public Object accessDeniedException;
    public PutProfileObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public PutProfileObjectResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutProfileObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutProfileObjectResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutProfileObjectResponse putProfileObjectResponse;
    public PutProfileObjectResponse withPutProfileObjectResponse(openapisdk.models.shared.PutProfileObjectResponse putProfileObjectResponse) {
        this.putProfileObjectResponse = putProfileObjectResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutProfileObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutProfileObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutProfileObjectResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}