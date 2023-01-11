package openapisdk.models.operations;



public class ListAccountAssignmentCreationStatusResponse {
    public Object accessDeniedException;
    public ListAccountAssignmentCreationStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAccountAssignmentCreationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccountAssignmentCreationStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccountAssignmentCreationStatusResponse listAccountAssignmentCreationStatusResponse;
    public ListAccountAssignmentCreationStatusResponse withListAccountAssignmentCreationStatusResponse(openapisdk.models.shared.ListAccountAssignmentCreationStatusResponse listAccountAssignmentCreationStatusResponse) {
        this.listAccountAssignmentCreationStatusResponse = listAccountAssignmentCreationStatusResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccountAssignmentCreationStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccountAssignmentCreationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccountAssignmentCreationStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAccountAssignmentCreationStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}