package openapisdk.models.operations;



public class CreateRoutingControlResponse {
    public Object accessDeniedException;
    public CreateRoutingControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateRoutingControlResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateRoutingControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRoutingControlResponse createRoutingControlResponse;
    public CreateRoutingControlResponse withCreateRoutingControlResponse(openapisdk.models.shared.CreateRoutingControlResponse createRoutingControlResponse) {
        this.createRoutingControlResponse = createRoutingControlResponse;
        return this;
    }
    public Object internalServerException;
    public CreateRoutingControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateRoutingControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateRoutingControlResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateRoutingControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateRoutingControlResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateRoutingControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}