package openapisdk.models.operations;



public class ListPermissionSetsResponse {
    public Object accessDeniedException;
    public ListPermissionSetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPermissionSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPermissionSetsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPermissionSetsResponse listPermissionSetsResponse;
    public ListPermissionSetsResponse withListPermissionSetsResponse(openapisdk.models.shared.ListPermissionSetsResponse listPermissionSetsResponse) {
        this.listPermissionSetsResponse = listPermissionSetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPermissionSetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPermissionSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPermissionSetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPermissionSetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}