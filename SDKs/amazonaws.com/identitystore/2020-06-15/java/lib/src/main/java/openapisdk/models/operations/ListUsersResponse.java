package openapisdk.models.operations;



public class ListUsersResponse {
    public Object accessDeniedException;
    public ListUsersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListUsersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListUsersResponse listUsersResponse;
    public ListUsersResponse withListUsersResponse(openapisdk.models.shared.ListUsersResponse listUsersResponse) {
        this.listUsersResponse = listUsersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListUsersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListUsersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListUsersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}