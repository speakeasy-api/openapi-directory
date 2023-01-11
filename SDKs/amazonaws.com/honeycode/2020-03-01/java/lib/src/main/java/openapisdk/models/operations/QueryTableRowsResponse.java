package openapisdk.models.operations;



public class QueryTableRowsResponse {
    public Object accessDeniedException;
    public QueryTableRowsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public QueryTableRowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public QueryTableRowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.QueryTableRowsResult queryTableRowsResult;
    public QueryTableRowsResponse withQueryTableRowsResult(openapisdk.models.shared.QueryTableRowsResult queryTableRowsResult) {
        this.queryTableRowsResult = queryTableRowsResult;
        return this;
    }
    public Object requestTimeoutException;
    public QueryTableRowsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public QueryTableRowsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public QueryTableRowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public QueryTableRowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public QueryTableRowsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public QueryTableRowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}