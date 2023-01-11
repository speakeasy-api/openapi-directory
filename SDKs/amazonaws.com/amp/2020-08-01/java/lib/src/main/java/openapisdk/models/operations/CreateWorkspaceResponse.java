package openapisdk.models.operations;



public class CreateWorkspaceResponse {
    public Object accessDeniedException;
    public CreateWorkspaceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateWorkspaceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorkspaceResponse createWorkspaceResponse;
    public CreateWorkspaceResponse withCreateWorkspaceResponse(openapisdk.models.shared.CreateWorkspaceResponse createWorkspaceResponse) {
        this.createWorkspaceResponse = createWorkspaceResponse;
        return this;
    }
    public Object internalServerException;
    public CreateWorkspaceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateWorkspaceResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateWorkspaceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateWorkspaceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}