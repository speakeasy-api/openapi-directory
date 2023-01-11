package openapisdk.models.operations;



public class ListAccountAssignmentDeletionStatusResponse {
    public Object accessDeniedException;
    public ListAccountAssignmentDeletionStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAccountAssignmentDeletionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccountAssignmentDeletionStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccountAssignmentDeletionStatusResponse listAccountAssignmentDeletionStatusResponse;
    public ListAccountAssignmentDeletionStatusResponse withListAccountAssignmentDeletionStatusResponse(openapisdk.models.shared.ListAccountAssignmentDeletionStatusResponse listAccountAssignmentDeletionStatusResponse) {
        this.listAccountAssignmentDeletionStatusResponse = listAccountAssignmentDeletionStatusResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccountAssignmentDeletionStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccountAssignmentDeletionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccountAssignmentDeletionStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAccountAssignmentDeletionStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}