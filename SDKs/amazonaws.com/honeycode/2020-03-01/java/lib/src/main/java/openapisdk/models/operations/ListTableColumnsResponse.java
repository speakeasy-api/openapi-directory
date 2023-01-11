package openapisdk.models.operations;



public class ListTableColumnsResponse {
    public Object accessDeniedException;
    public ListTableColumnsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTableColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTableColumnsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTableColumnsResult listTableColumnsResult;
    public ListTableColumnsResponse withListTableColumnsResult(openapisdk.models.shared.ListTableColumnsResult listTableColumnsResult) {
        this.listTableColumnsResult = listTableColumnsResult;
        return this;
    }
    public Object requestTimeoutException;
    public ListTableColumnsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTableColumnsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListTableColumnsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListTableColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTableColumnsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTableColumnsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}