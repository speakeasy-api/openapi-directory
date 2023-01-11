package openapisdk.models.operations;



public class ListAccountAssignmentsResponse {
    public Object accessDeniedException;
    public ListAccountAssignmentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAccountAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccountAssignmentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccountAssignmentsResponse listAccountAssignmentsResponse;
    public ListAccountAssignmentsResponse withListAccountAssignmentsResponse(openapisdk.models.shared.ListAccountAssignmentsResponse listAccountAssignmentsResponse) {
        this.listAccountAssignmentsResponse = listAccountAssignmentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccountAssignmentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccountAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccountAssignmentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAccountAssignmentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}