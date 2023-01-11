package openapisdk.models.operations;



public class ListPageReceiptsResponse {
    public Object accessDeniedException;
    public ListPageReceiptsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPageReceiptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPageReceiptsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPageReceiptsResult listPageReceiptsResult;
    public ListPageReceiptsResponse withListPageReceiptsResult(openapisdk.models.shared.ListPageReceiptsResult listPageReceiptsResult) {
        this.listPageReceiptsResult = listPageReceiptsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPageReceiptsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPageReceiptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPageReceiptsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPageReceiptsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}