package openapisdk.models.operations;



public class ListEntitiesResponse {
    public Object accessDeniedException;
    public ListEntitiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListEntitiesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListEntitiesResponse listEntitiesResponse;
    public ListEntitiesResponse withListEntitiesResponse(openapisdk.models.shared.ListEntitiesResponse listEntitiesResponse) {
        this.listEntitiesResponse = listEntitiesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEntitiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEntitiesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEntitiesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}