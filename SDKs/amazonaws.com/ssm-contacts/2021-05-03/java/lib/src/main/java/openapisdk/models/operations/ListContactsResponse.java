package openapisdk.models.operations;



public class ListContactsResponse {
    public Object accessDeniedException;
    public ListContactsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListContactsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListContactsResult listContactsResult;
    public ListContactsResponse withListContactsResult(openapisdk.models.shared.ListContactsResult listContactsResult) {
        this.listContactsResult = listContactsResult;
        return this;
    }
    public Long statusCode;
    public ListContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListContactsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListContactsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}