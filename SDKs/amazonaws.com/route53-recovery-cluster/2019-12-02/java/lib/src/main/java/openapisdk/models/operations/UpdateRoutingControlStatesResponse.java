package openapisdk.models.operations;



public class UpdateRoutingControlStatesResponse {
    public Object accessDeniedException;
    public UpdateRoutingControlStatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateRoutingControlStatesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateRoutingControlStatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointTemporarilyUnavailableException;
    public UpdateRoutingControlStatesResponse withEndpointTemporarilyUnavailableException(Object endpointTemporarilyUnavailableException) {
        this.endpointTemporarilyUnavailableException = endpointTemporarilyUnavailableException;
        return this;
    }
    public Object internalServerException;
    public UpdateRoutingControlStatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRoutingControlStatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRoutingControlStatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRoutingControlStatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateRoutingControlStatesResponse;
    public UpdateRoutingControlStatesResponse withUpdateRoutingControlStatesResponse(java.util.Map<String, Object> updateRoutingControlStatesResponse) {
        this.updateRoutingControlStatesResponse = updateRoutingControlStatesResponse;
        return this;
    }
    public Object validationException;
    public UpdateRoutingControlStatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}