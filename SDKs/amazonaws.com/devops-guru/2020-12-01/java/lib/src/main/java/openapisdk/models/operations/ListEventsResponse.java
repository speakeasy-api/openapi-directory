package openapisdk.models.operations;



public class ListEventsResponse {
    public Object accessDeniedException;
    public ListEventsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEventsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEventsResponse listEventsResponse;
    public ListEventsResponse withListEventsResponse(openapisdk.models.shared.ListEventsResponse listEventsResponse) {
        this.listEventsResponse = listEventsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEventsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEventsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}