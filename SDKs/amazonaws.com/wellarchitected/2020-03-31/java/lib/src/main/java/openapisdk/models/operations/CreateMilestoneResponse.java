package openapisdk.models.operations;



public class CreateMilestoneResponse {
    public Object accessDeniedException;
    public CreateMilestoneResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateMilestoneResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateMilestoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMilestoneOutput createMilestoneOutput;
    public CreateMilestoneResponse withCreateMilestoneOutput(openapisdk.models.shared.CreateMilestoneOutput createMilestoneOutput) {
        this.createMilestoneOutput = createMilestoneOutput;
        return this;
    }
    public Object internalServerException;
    public CreateMilestoneResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateMilestoneResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateMilestoneResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateMilestoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateMilestoneResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateMilestoneResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}