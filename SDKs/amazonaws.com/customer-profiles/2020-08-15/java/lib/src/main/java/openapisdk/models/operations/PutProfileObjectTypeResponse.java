package openapisdk.models.operations;



public class PutProfileObjectTypeResponse {
    public Object accessDeniedException;
    public PutProfileObjectTypeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public PutProfileObjectTypeResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutProfileObjectTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutProfileObjectTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutProfileObjectTypeResponse putProfileObjectTypeResponse;
    public PutProfileObjectTypeResponse withPutProfileObjectTypeResponse(openapisdk.models.shared.PutProfileObjectTypeResponse putProfileObjectTypeResponse) {
        this.putProfileObjectTypeResponse = putProfileObjectTypeResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutProfileObjectTypeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutProfileObjectTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutProfileObjectTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}