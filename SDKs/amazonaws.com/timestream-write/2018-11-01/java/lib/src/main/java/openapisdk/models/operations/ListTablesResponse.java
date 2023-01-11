package openapisdk.models.operations;



public class ListTablesResponse {
    public Object accessDeniedException;
    public ListTablesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTablesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public ListTablesResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public openapisdk.models.shared.ListTablesResponse listTablesResponse;
    public ListTablesResponse withListTablesResponse(openapisdk.models.shared.ListTablesResponse listTablesResponse) {
        this.listTablesResponse = listTablesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTablesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTablesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTablesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}