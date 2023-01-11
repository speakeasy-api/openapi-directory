package openapisdk.models.operations;



public class SearchTablesByLfTagsResponse {
    public Object accessDeniedException;
    public SearchTablesByLfTagsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchTablesByLfTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public SearchTablesByLfTagsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public SearchTablesByLfTagsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public SearchTablesByLfTagsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public SearchTablesByLfTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public SearchTablesByLfTagsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.SearchTablesByLfTagsResponse searchTablesByLFTagsResponse;
    public SearchTablesByLfTagsResponse withSearchTablesByLfTagsResponse(openapisdk.models.shared.SearchTablesByLfTagsResponse searchTablesByLFTagsResponse) {
        this.searchTablesByLFTagsResponse = searchTablesByLFTagsResponse;
        return this;
    }
    public Long statusCode;
    public SearchTablesByLfTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}