package openapisdk.models.operations;



public class SearchDatabasesByLfTagsResponse {
    public Object accessDeniedException;
    public SearchDatabasesByLfTagsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchDatabasesByLfTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public SearchDatabasesByLfTagsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public SearchDatabasesByLfTagsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public SearchDatabasesByLfTagsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public SearchDatabasesByLfTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public SearchDatabasesByLfTagsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.SearchDatabasesByLfTagsResponse searchDatabasesByLFTagsResponse;
    public SearchDatabasesByLfTagsResponse withSearchDatabasesByLfTagsResponse(openapisdk.models.shared.SearchDatabasesByLfTagsResponse searchDatabasesByLFTagsResponse) {
        this.searchDatabasesByLFTagsResponse = searchDatabasesByLFTagsResponse;
        return this;
    }
    public Long statusCode;
    public SearchDatabasesByLfTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}