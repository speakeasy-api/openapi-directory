package openapisdk.models.operations;



public class ListPagesByContactResponse {
    public Object accessDeniedException;
    public ListPagesByContactResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPagesByContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPagesByContactResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPagesByContactResult listPagesByContactResult;
    public ListPagesByContactResponse withListPagesByContactResult(openapisdk.models.shared.ListPagesByContactResult listPagesByContactResult) {
        this.listPagesByContactResult = listPagesByContactResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPagesByContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPagesByContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPagesByContactResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPagesByContactResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}