package openapisdk.models.operations;



public class ListComponentVersionsResponse {
    public Object accessDeniedException;
    public ListComponentVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListComponentVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListComponentVersionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListComponentVersionsResponse listComponentVersionsResponse;
    public ListComponentVersionsResponse withListComponentVersionsResponse(openapisdk.models.shared.ListComponentVersionsResponse listComponentVersionsResponse) {
        this.listComponentVersionsResponse = listComponentVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListComponentVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListComponentVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListComponentVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListComponentVersionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}