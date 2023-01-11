package openapisdk.models.operations;



public class CreateWorkloadResponse {
    public Object accessDeniedException;
    public CreateWorkloadResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateWorkloadResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateWorkloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorkloadOutput createWorkloadOutput;
    public CreateWorkloadResponse withCreateWorkloadOutput(openapisdk.models.shared.CreateWorkloadOutput createWorkloadOutput) {
        this.createWorkloadOutput = createWorkloadOutput;
        return this;
    }
    public Object internalServerException;
    public CreateWorkloadResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateWorkloadResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateWorkloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateWorkloadResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateWorkloadResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}