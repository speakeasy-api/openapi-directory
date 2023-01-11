package openapisdk.models.operations;



public class ListTrackerConsumersResponse {
    public Object accessDeniedException;
    public ListTrackerConsumersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTrackerConsumersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTrackerConsumersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTrackerConsumersResponse listTrackerConsumersResponse;
    public ListTrackerConsumersResponse withListTrackerConsumersResponse(openapisdk.models.shared.ListTrackerConsumersResponse listTrackerConsumersResponse) {
        this.listTrackerConsumersResponse = listTrackerConsumersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTrackerConsumersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTrackerConsumersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTrackerConsumersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTrackerConsumersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}