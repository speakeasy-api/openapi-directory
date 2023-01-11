package openapisdk.models.operations;



public class GetResourceLfTagsResponse {
    public Object accessDeniedException;
    public GetResourceLfTagsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResourceLfTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetResourceLfTagsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetResourceLfTagsResponse getResourceLFTagsResponse;
    public GetResourceLfTagsResponse withGetResourceLfTagsResponse(openapisdk.models.shared.GetResourceLfTagsResponse getResourceLFTagsResponse) {
        this.getResourceLFTagsResponse = getResourceLFTagsResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetResourceLfTagsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetResourceLfTagsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetResourceLfTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetResourceLfTagsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetResourceLfTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}