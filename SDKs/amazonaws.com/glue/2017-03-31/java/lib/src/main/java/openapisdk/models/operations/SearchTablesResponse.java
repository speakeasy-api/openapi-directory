package openapisdk.models.operations;



public class SearchTablesResponse {
    public String contentType;
    public SearchTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public SearchTablesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public SearchTablesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public SearchTablesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.SearchTablesResponse searchTablesResponse;
    public SearchTablesResponse withSearchTablesResponse(openapisdk.models.shared.SearchTablesResponse searchTablesResponse) {
        this.searchTablesResponse = searchTablesResponse;
        return this;
    }
    public Long statusCode;
    public SearchTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}