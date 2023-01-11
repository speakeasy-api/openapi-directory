package openapisdk.models.operations;



public class ListEnabledProductsForImportResponse {
    public String contentType;
    public ListEnabledProductsForImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListEnabledProductsForImportResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public ListEnabledProductsForImportResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object limitExceededException;
    public ListEnabledProductsForImportResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListEnabledProductsForImportResponse listEnabledProductsForImportResponse;
    public ListEnabledProductsForImportResponse withListEnabledProductsForImportResponse(openapisdk.models.shared.ListEnabledProductsForImportResponse listEnabledProductsForImportResponse) {
        this.listEnabledProductsForImportResponse = listEnabledProductsForImportResponse;
        return this;
    }
    public Long statusCode;
    public ListEnabledProductsForImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}