package openapisdk.models.operations;



public class CreateComponentVersionResponse {
    public Object accessDeniedException;
    public CreateComponentVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateComponentVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateComponentVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateComponentVersionResponse createComponentVersionResponse;
    public CreateComponentVersionResponse withCreateComponentVersionResponse(openapisdk.models.shared.CreateComponentVersionResponse createComponentVersionResponse) {
        this.createComponentVersionResponse = createComponentVersionResponse;
        return this;
    }
    public Object internalServerException;
    public CreateComponentVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestAlreadyInProgressException;
    public CreateComponentVersionResponse withRequestAlreadyInProgressException(Object requestAlreadyInProgressException) {
        this.requestAlreadyInProgressException = requestAlreadyInProgressException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateComponentVersionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateComponentVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateComponentVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateComponentVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}