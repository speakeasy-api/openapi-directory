package openapisdk.models.operations;



public class CreateAccountAssignmentResponse {
    public Object accessDeniedException;
    public CreateAccountAssignmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateAccountAssignmentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateAccountAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAccountAssignmentResponse createAccountAssignmentResponse;
    public CreateAccountAssignmentResponse withCreateAccountAssignmentResponse(openapisdk.models.shared.CreateAccountAssignmentResponse createAccountAssignmentResponse) {
        this.createAccountAssignmentResponse = createAccountAssignmentResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAccountAssignmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAccountAssignmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateAccountAssignmentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAccountAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAccountAssignmentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateAccountAssignmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}