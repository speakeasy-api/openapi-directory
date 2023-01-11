package openapisdk.models.operations;



public class UpdateRoutingControlStateResponse {
    public Object accessDeniedException;
    public UpdateRoutingControlStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateRoutingControlStateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateRoutingControlStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointTemporarilyUnavailableException;
    public UpdateRoutingControlStateResponse withEndpointTemporarilyUnavailableException(Object endpointTemporarilyUnavailableException) {
        this.endpointTemporarilyUnavailableException = endpointTemporarilyUnavailableException;
        return this;
    }
    public Object internalServerException;
    public UpdateRoutingControlStateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRoutingControlStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRoutingControlStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRoutingControlStateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateRoutingControlStateResponse;
    public UpdateRoutingControlStateResponse withUpdateRoutingControlStateResponse(java.util.Map<String, Object> updateRoutingControlStateResponse) {
        this.updateRoutingControlStateResponse = updateRoutingControlStateResponse;
        return this;
    }
    public Object validationException;
    public UpdateRoutingControlStateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}