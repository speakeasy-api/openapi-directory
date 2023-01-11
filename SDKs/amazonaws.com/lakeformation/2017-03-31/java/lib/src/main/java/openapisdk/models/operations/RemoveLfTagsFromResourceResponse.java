package openapisdk.models.operations;



public class RemoveLfTagsFromResourceResponse {
    public Object accessDeniedException;
    public RemoveLfTagsFromResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public RemoveLfTagsFromResourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public RemoveLfTagsFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public RemoveLfTagsFromResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public RemoveLfTagsFromResourceResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public RemoveLfTagsFromResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public RemoveLfTagsFromResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public RemoveLfTagsFromResourceResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.RemoveLfTagsFromResourceResponse removeLFTagsFromResourceResponse;
    public RemoveLfTagsFromResourceResponse withRemoveLfTagsFromResourceResponse(openapisdk.models.shared.RemoveLfTagsFromResourceResponse removeLFTagsFromResourceResponse) {
        this.removeLFTagsFromResourceResponse = removeLFTagsFromResourceResponse;
        return this;
    }
    public Long statusCode;
    public RemoveLfTagsFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}