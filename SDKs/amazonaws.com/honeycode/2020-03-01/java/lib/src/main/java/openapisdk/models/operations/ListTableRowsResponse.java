package openapisdk.models.operations;



public class ListTableRowsResponse {
    public Object accessDeniedException;
    public ListTableRowsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTableRowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTableRowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTableRowsResult listTableRowsResult;
    public ListTableRowsResponse withListTableRowsResult(openapisdk.models.shared.ListTableRowsResult listTableRowsResult) {
        this.listTableRowsResult = listTableRowsResult;
        return this;
    }
    public Object requestTimeoutException;
    public ListTableRowsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTableRowsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListTableRowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListTableRowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTableRowsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTableRowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}