package openapisdk.models.operations;



public class CreateWorkloadShareResponse {
    public Object accessDeniedException;
    public CreateWorkloadShareResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateWorkloadShareResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateWorkloadShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorkloadShareOutput createWorkloadShareOutput;
    public CreateWorkloadShareResponse withCreateWorkloadShareOutput(openapisdk.models.shared.CreateWorkloadShareOutput createWorkloadShareOutput) {
        this.createWorkloadShareOutput = createWorkloadShareOutput;
        return this;
    }
    public Object internalServerException;
    public CreateWorkloadShareResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateWorkloadShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateWorkloadShareResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateWorkloadShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateWorkloadShareResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateWorkloadShareResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}