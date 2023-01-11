package openapisdk.models.operations;



public class CreateWorkflowResponse {
    public Object accessDeniedException;
    public CreateWorkflowResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorkflowResponse createWorkflowResponse;
    public CreateWorkflowResponse withCreateWorkflowResponse(openapisdk.models.shared.CreateWorkflowResponse createWorkflowResponse) {
        this.createWorkflowResponse = createWorkflowResponse;
        return this;
    }
    public Object internalServiceError;
    public CreateWorkflowResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public CreateWorkflowResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceExistsException;
    public CreateWorkflowResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateWorkflowResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateWorkflowResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}