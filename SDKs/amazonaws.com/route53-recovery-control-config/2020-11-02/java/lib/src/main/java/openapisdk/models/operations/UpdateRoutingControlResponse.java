package openapisdk.models.operations;



public class UpdateRoutingControlResponse {
    public Object accessDeniedException;
    public UpdateRoutingControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateRoutingControlResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateRoutingControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateRoutingControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRoutingControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRoutingControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRoutingControlResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateRoutingControlResponse updateRoutingControlResponse;
    public UpdateRoutingControlResponse withUpdateRoutingControlResponse(openapisdk.models.shared.UpdateRoutingControlResponse updateRoutingControlResponse) {
        this.updateRoutingControlResponse = updateRoutingControlResponse;
        return this;
    }
    public Object validationException;
    public UpdateRoutingControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}