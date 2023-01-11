package openapisdk.models.operations;



public class CreateEnvironmentAccountConnectionResponse {
    public Object accessDeniedException;
    public CreateEnvironmentAccountConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateEnvironmentAccountConnectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateEnvironmentAccountConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentAccountConnectionOutput createEnvironmentAccountConnectionOutput;
    public CreateEnvironmentAccountConnectionResponse withCreateEnvironmentAccountConnectionOutput(openapisdk.models.shared.CreateEnvironmentAccountConnectionOutput createEnvironmentAccountConnectionOutput) {
        this.createEnvironmentAccountConnectionOutput = createEnvironmentAccountConnectionOutput;
        return this;
    }
    public Object internalServerException;
    public CreateEnvironmentAccountConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateEnvironmentAccountConnectionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentAccountConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateEnvironmentAccountConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateEnvironmentAccountConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}