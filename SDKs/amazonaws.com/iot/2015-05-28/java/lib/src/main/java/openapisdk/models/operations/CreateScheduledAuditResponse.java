package openapisdk.models.operations;



public class CreateScheduledAuditResponse {
    public String contentType;
    public CreateScheduledAuditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateScheduledAuditResponse createScheduledAuditResponse;
    public CreateScheduledAuditResponse withCreateScheduledAuditResponse(openapisdk.models.shared.CreateScheduledAuditResponse createScheduledAuditResponse) {
        this.createScheduledAuditResponse = createScheduledAuditResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateScheduledAuditResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateScheduledAuditResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateScheduledAuditResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateScheduledAuditResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateScheduledAuditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateScheduledAuditResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}