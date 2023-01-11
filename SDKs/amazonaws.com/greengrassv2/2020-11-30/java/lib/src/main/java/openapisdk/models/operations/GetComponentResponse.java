package openapisdk.models.operations;



public class GetComponentResponse {
    public Object accessDeniedException;
    public GetComponentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComponentResponse getComponentResponse;
    public GetComponentResponse withGetComponentResponse(openapisdk.models.shared.GetComponentResponse getComponentResponse) {
        this.getComponentResponse = getComponentResponse;
        return this;
    }
    public Object internalServerException;
    public GetComponentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetComponentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}